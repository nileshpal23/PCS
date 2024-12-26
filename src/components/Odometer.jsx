"use client";

import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const OdometerComponent = ({ value }) => {
  const [startValue, setStartValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartValue(value);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <CountUp
        start={-400}
        end={startValue}
        duration={2}
        useEasing={true}
        separator=","
        decimals={0}
        delay={0}
      />
    </div>
  );
};

export default OdometerComponent;
