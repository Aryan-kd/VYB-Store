"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AuthImage } from "@/images";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <section className="flex justify-between items-center flex-wrap min-h-[80vh] w-full mb-40">
      <div className="hidden justify-center items-center md:w-[35vw] md:flex h-full">
        <AuthImage />
      </div>
      <div className="h-full w-[100vw] md:w-[60vw] flex justify-center items-center">
        {children}
      </div>
    </section>
  );
};

export default AuthPageLayout;
