import type React from "react";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import Script from "next/script";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="w-full">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full",
          inter.className
        )}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  generator: "v0.dev",
};
