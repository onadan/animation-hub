"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Card({ title, link = "" }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return (
    <CustomLink link={link}>
      <div
        onMouseMove={handleMouseMove}
        className="group h-[200px] w-full rounded-lg border border-white/10 bg-white bg-white/5 bg-clip-padding backdrop-blur-xl backdrop-filter hover:border-white/30 lg:rounded-2xl overflow-hidden"
      >
        <motion.div
          className="absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-lg lg:rounded-2xl blur-3xl"
          style={{
            background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.1), transparent 80%)`,
          }}
        />
      </div>
      <p className="py-3">{title || "Card Component"}</p>
    </CustomLink>
  );
}

const CustomLink = ({ link, children }) => {
  if (link) {
    return <Link href={link}>{children}</Link>;
  } else {
    return <>{children}</>;
  }
};
