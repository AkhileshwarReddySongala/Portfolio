"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import RedoAnimText from "./redo-text-animation";
import CursorBlinker from "./cursor-blinker";

export interface ITextAnimationProps {
  delay: number;
  baseText?: string;
}

export default function TextAnimation({
  delay,
  baseText = "",
}: ITextAnimationProps) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-6 block font-mono text-lg font-medium text-gray-300 md:text-xl leading-relaxed"
    >
      <motion.span>{displayText}</motion.span>
      {done && (
        <>
          <br className="hidden sm:block" />
        </>
      )}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </motion.span>
  );
}
