"use client";

import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";

async function sessionGet() {
  return await getServerSession();
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let session: any = sessionGet();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
