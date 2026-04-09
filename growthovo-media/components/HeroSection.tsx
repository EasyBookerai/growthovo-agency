"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-8 bg-white/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponibil pentru proiecte noi
        </motion.div>

        {/* Main title */}
        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6"
        >
          Un Site Profesional
          <br />
          <span className="text-zinc-400">pentru Afacerea Ta.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construiesc site-uri rapide, curate și profesionale pentru afaceri care vor să crească. Plată unică.{" "}
          <span className="text-white font-medium">Fără abonament. Fără surprize.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full text-base hover:bg-zinc-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            aria-label="Contact Growthovo Media on WhatsApp"
          >
            Vreau site-ul meu — de la 800 RON
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#pricing"
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
          >
            Vezi ce include
          </a>
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">100/100</span>
            <span>PageSpeed Score</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">€0</span>
            <span>Hosting gratuit</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">1×</span>
            <span>Plată unică</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
