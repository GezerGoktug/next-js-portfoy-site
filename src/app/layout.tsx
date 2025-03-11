import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import UIProvider from "@/providers/UIProvider";
import { ToastProvider } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Göktuğ Gezer",
  description:
    " I am a passionate software developer who loves research and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <UIProvider>
          <ToastProvider />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
