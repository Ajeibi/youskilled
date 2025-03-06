"use client";

import CountUp from "react-countup";
import { useState, useEffect } from "react";

interface CountUpProps {
  start: number;
  end: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const CustomCountUp = ({
  start,
  end,
  duration = 2,
  separator = ",",
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <span>
      {shouldAnimate && (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          separator={separator}
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
        />
      )}
    </span>
  );
};

export default CustomCountUp;
