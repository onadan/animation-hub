"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/heading";

const tab = ["All", "Active", "Pending", "Completed"];

export default function Page() {
  // console.log("render");
  return (
    <div className="px-4">
      <Heading title={"Micro Interactions🚀"} />

      <div className="my-10 flex flex-col gap-10">
        {/* Tabs */}
        <Tabs />

        {/* Name */}
        <Name />
      </div>
    </div>
  );
}
const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

const Name = () => {
  console.log("%crender", "color: #fff");
  const [loading, setLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = ({ currentTarget }) => {
    // console.log(currentTarget.dataset.value)
    if (!loading) {
      // setLoading(true);
      let iteration = 0;

      const interval = setInterval(() => {
        currentTarget.innerText = currentTarget.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return currentTarget.dataset.value[index];
            } else {
              return letters[Math.floor(Math.random() * 26)];
            }
          })
          .join("");

        if (iteration >= currentTarget.dataset.value.length) {
          clearInterval(interval);
          // setLoading(false);
        }

        iteration += 1 / 2;
      }, 50);

      setIntervalId(interval);
    }
  };

  return (
    <div className="aspect-auto w-[400px] px-2">
      <h1
        onMouseOver={handleMouseOver}
        onTouchMove={handleMouseOver}
        data-value="ANONYMOUS"
        className="py-1 pr-4 text-5xl font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
      >
        ANONYMOUS
      </h1>
    </div>
  );
};

const Tabs = () => {
  const [active, setActive] = useState(tab[0]);
  return (
    <div className="flex flex-wrap gap-3">
      {tab.map((name, idx) => (
        <button
          key={idx}
          className="relative cursor-pointer select-none rounded-full px-3 py-1"
          onClick={() => setActive(name)}
        >
          {name === active && (
            <motion.span
              transition={{
                type: "spring",
                stiffness: 70,
                duration: 0.6,
              }}
              style={{ borderRadius: 999 }}
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
            ></motion.span>
          )}
          {name}
        </button>
      ))}
    </div>
  );
};
