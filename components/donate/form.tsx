"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

const formSchema = z
  .object({
    selectedAmount: z.union([
      z.enum(["10", "25", "50", "100", "500"]),
      z.literal("custom"),
    ]),
    customAmount: z.string().optional(),
    paymentMethod: z.enum(["credit", "paypal"]),
    creditCard: z.string().optional(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
  })
  .superRefine((data, ctx) => {
    if (data.selectedAmount === "custom") {
      if (!data.customAmount) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Custom amount is required",
          path: ["customAmount"],
        });
      } else {
        const amount = parseFloat(data.customAmount);
        if (isNaN(amount) || amount <= 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Amount must be greater than $0",
            path: ["customAmount"],
          });
        }
      }
    }

    if (data.paymentMethod === "credit" && !data.creditCard) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Credit card number is required",
        path: ["creditCard"],
      });
    }
  });

const DonationForm = () => {
  const [donationTotal, setDonationTotal] = useState<number>(10);
  const [showModal, setShowModal] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedAmount: "10",
      paymentMethod: "paypal",
    },
  });

  const selectedAmount = form.watch("selectedAmount");
  const paymentMethod = form.watch("paymentMethod");

  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.selectedAmount === "custom") {
        const amount = parseFloat(value.customAmount || "0");
        setDonationTotal(isNaN(amount) ? 0 : amount);
      } else {
        setDonationTotal(parseFloat(value.selectedAmount || "0"));
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Important Notice</DialogTitle>
            <DialogDescription>
              This is a demo website and your data is not being saved.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col md:flex-row gap-6 py-10">
        {/* Form Container */}
        <div className="w-full md:w-1/2 px-4 md:px-10 lg:px-20">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Make a Donation
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="selectedAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Donation Amount
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-3 gap-4 md:flex md:flex-wrap md:gap-6"
                        >
                          {["10", "25", "50", "100", "500"].map((amount) => (
                            <FormItem
                              key={amount}
                              className="flex items-center space-x-2"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={amount}
                                  id={`amount-${amount}`}
                                />
                              </FormControl>
                              <FormLabel htmlFor={`amount-${amount}`}>
                                ${amount}
                              </FormLabel>
                            </FormItem>
                          ))}
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem
                                value="custom"
                                id="amount-custom"
                              />
                            </FormControl>
                            <FormLabel htmlFor="amount-custom">
                              Custom Amount
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {selectedAmount === "custom" && (
                  <FormField
                    control={form.control}
                    name="customAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Custom Amount ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter custom amount"
                            {...field}
                            className="focus:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Payment Method
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex gap-6"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="credit" />
                            </FormControl>
                            <FormLabel>Credit Card</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="paypal" />
                            </FormControl>
                            <FormLabel>PayPal</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {paymentMethod === "credit" && (
                  <FormField
                    control={form.control}
                    name="creditCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit Card Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="4111 1111 1111 1111"
                            {...field}
                            className="focus:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="focus:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="focus:ring-orange-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="focus:ring-orange-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-orange-100 p-4 rounded-lg text-center">
                  <p className="text-lg font-bold">
                    Total Donation: ${donationTotal.toFixed(2)}
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 transition-colors"
                >
                  Donate Now
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <Image
            src="/donateJoin.webp"
            alt="support our project"
            width={500}
            height={500}
            className="rounded-2xl w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        </div>
      </div>
    </>
  );
};

export default DonationForm;
