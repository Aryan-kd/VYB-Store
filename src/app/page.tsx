"use client";

import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import HowItWork from "@/components/Work/HowItWork";
import Earning from "@/components/Earning/Earning";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <HowItWork />
      <Earning />
      <FAQ />
    </div>
  );
}
