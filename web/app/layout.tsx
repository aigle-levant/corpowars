import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Providers from "./providers";
import {
  GeistPixelSquare
} from "geist/font/pixel";

import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Corpowars",
  description: "Line must go up. Everything else secondary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        notoSans.variable,
        GeistPixelSquare.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
