import "./globals.css";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dosis",
});

// fontFamily: {
//   sans: ['var(--font-inter)'],

export const metadata = {
  title: "Motion by Onadan",
  description: "Animation made in Nextjs by framer motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dosis.className} bg-black text-white overflow-x-hidden`}>
        <div className="w-full flex justify-center">
          <div className="max-w-[1124px] w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
