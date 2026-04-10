"use client";

import { motion } from "framer-motion";
import { Zap, Eye, MessageCircle, Star } from "lucide-react";

const DEMO_STEPS = [
  {
    icon: MessageCircle,
    title: "1. Scrie-mi pe WhatsApp",
    desc: "Spune-mi domeniul tău și ce vrei să comunici.",
  },
  {
    icon: Eye,
    title: "2. Primești demo-ul în 24h",
    desc: "Construiesc un demo personalizat pentru tine, gratuit, fără nicio obligație.",
  },
  {
    icon: Star,
    title: "3. Dacă îți place, continuăm",
    desc: "Plătești doar dacă ești 100% mulțumit de ce vezi.",
  },
];

const WHATSAPP_DEMO =
  "https://wa.me/40734462634?text=Buna%2C%20as%20dori%20un%20demo%20gratuit%20pentru%20site-ul%20meu!";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6" aria-label="Free Demo">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 mb-6">
            <Zap size={12} className="text-yellow-400" />
            Fără risc, fără obligații
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Vezi site-ul tău înainte
            <br />
            <span className="text-zinc-400">să plătești un leu.</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Construiesc un demo complet, personalizat pentru afacerea ta. Plătești doar dacă ești convins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {DEMO_STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-4">
                <step.icon size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-black py-4 px-10 rounded-2xl text-base hover:bg-zinc-100 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <MessageCircle size={20} />
            Obține demo-ul meu gratuit &#8594;
          </a>
          <p className="text-zinc-600 text-xs mt-4">
            Răspund în 24 de ore. Zero spam, zero obligații.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
