import React from "react";
import "../styles/globals.css";
import Header from "./Header";
import { getServerSession } from "next-auth/next";
import { Providers } from "@/app/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
