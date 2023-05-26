"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Heading({ title }) {
  const pathname = usePathname();
  return (
    <header className="my-4 mt-8">
      {pathname !== "/" && (
        <Link href="/">
          <p className="cursor-pointer py-5 text-sm">
            {" "}
            &lt; <span className="underline">Back to home</span>{" "}
          </p>
        </Link>
      )}
      {title && <p className="text-5xl font-semibold">{title} </p>}
    </header>
  );
}
