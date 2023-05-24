"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/heading";

const tab = ["All", "Active", "Pending", "Completed"];

export default function Page() {
  return (
    <div className="px-4">
      <Heading title={"Micro Interactions🚀"} />

      <div className="my-10 flex flex-col items-center justify-center gap-10">
        {/* Tabs */}
        <Tabs />

        {/* Name */}
        <Name />
      </div>
    </div>
  );
}

const Name = () => {
  const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  const handleMouseOver = ({ currentTarget }) => {
    // setInterval(() =>{
    // DOCTOR.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("")
    // })

    // console.log(DOCTOR.split("").map(letter, idx => letters[Math.floor(Math.random() * 26)]).join(""));
    console.log(currentTarget.innerText);
  };
  return (
    <div className="aspect-auto px-2">
      <h1 onMouseOver={handleMouseOver} className="text-5xl font-bold">
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
