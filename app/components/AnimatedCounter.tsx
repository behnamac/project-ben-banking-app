"use client";
import React from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
}

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} prefix="$" decimal="," />
    </div>
  );
};

export default AnimatedCounter;
