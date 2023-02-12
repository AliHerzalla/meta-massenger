"use client";
import { SessionProvider } from "next-auth/react";

export default function Providers({ session, children }) {
  <SessionProvider session={session}>{children}</SessionProvider>;
}
