"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

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
        className="group h-[200px] w-full overflow-hidden rounded-lg border border-white/10 bg-white bg-white/5 bg-clip-padding backdrop-blur-xl backdrop-filter hover:border-white/30 lg:rounded-2xl flex justify-center items-center"
      >
        <motion.div
          className="absolute -inset-px rounded-lg opacity-0 blur-3xl transition duration-300 group-hover:opacity-100 lg:rounded-2xl"
          style={{
            background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.1), transparent 80%)`,
          }}
        />
        {title && <p className="font-semibold text-2xl sm:text-4xl lg:text-5xl">{title}</p>}
      </div>
      {/* <p className="py-3">{title || "Card Component"}</p> */}
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
