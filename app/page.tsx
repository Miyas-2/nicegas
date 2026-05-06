"use client";

import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Roadmap } from "./components/Roadmap";
import { Partners } from "./components/Partners";
import { PressRelease } from "./components/PressRelease";
import { PurchaseForm } from "./components/PurchaseForm";
import { Footer, WhatsAppButton } from "./components/Footer";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Roadmap />
      <Partners />
      <PressRelease />
      <PurchaseForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
