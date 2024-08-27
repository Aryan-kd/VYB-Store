"use client";

import { AuthImage } from "@/images";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
