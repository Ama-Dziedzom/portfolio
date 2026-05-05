"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AccraClock() {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Accra",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="accra-clock"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="accra-clock__dot-wrapper">
        <div className="accra-clock__dot" />
        <div className="accra-clock__pulse" />
      </div>
      <div className="accra-clock__label">Accra, GH</div>
      <div className="accra-clock__time">{time}</div>
    </motion.div>
  );
}
