"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import DashboardNav from "@/components/Dashboard/DashboardNav";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex md:flex-row flex-col justify-center items-start min-h-[80vh] w-full md:gap-0 gap-2 mb-20">
      <div className="md:flex hidden justify-center items-center w-[40vw]">
        <Dashboard />
      </div>
      <div className="md:hidden flex justify-center items-center w-[95vw] mx-auto">
        <DashboardNav />
      </div>
      <div className="flex justify-center items-center md:w-[60vw] w-[95vw] mx-auto">
        {children}
      </div>
    </section>
  );
}
