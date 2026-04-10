"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const PLANS = [
  {
    name: "Starter",
    price: "120 EUR",
    description: "Site de prezentare profesional, gata să atragă clienți.",
    features: [
      "Design 100% personalizat",
      "Până la 5 secțiuni",
      "Mobile-first & responsive",
      "SEO tehnic complet",
      "Hosting gratuit pe Vercel",
      "Domeniu configurat",
      "Scor PageSpeed 100/100",
      "Livrat în 7 zile",
    ],
    cta: "Alege acest plan",
    highlight: false,
  },
  {
    name: "Premium",
    price: "170 EUR",
    description: "Site avansat cu animații, mai multe pagini și funcționalități extra.",
    features: [
      "Tot ce include Starter",
      "Animații & tranziții premium",
      "Până la 10 secțiuni / pagini",
      "Formular de contact funcțional",
      "Integrare Google Analytics",
      "SEO avansat + meta tags",
      "Livrat în 10 zile",
    ],
    cta: "Alege acest plan",
    highlight: true,
  },
  {
    name: "3D & Motion",
    price: "240 EUR",
    description: "Experiență vizuală de top cu animații 3D și efecte cinematice.",
    features: [
      "Tot ce include Premium",
      "Animații 3D interactive",
      "Efecte parallax & scroll",
      "Loader animat personalizat",
      "Micro-interacțiuni UI",
      "Optimizat pentru conversii",
      "Suport 30 zile post-livrare",
      "Livrat în 14 zile",
    ],
    cta: "Alege acest plan",
    highlight: false,
  },
];

export default function OfferSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6" aria-label="Pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 mb-6">
            <Zap size={12} className="text-yellow-400" />
            Disponibilitate limitată
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Alege planul potrivit.
            <br />
            <span className="text-zinc-400">Plată unică, fără abonament.</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Fiecare plan include hosting gratuit pe viață, codul sursă complet și proprietate deplină.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.15)] scale-[1.03]"
                  : "bg-zinc-900 border border-zinc-800 text-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-4 py-1 rounded-full border border-zinc-700">
                  &#11088; Cel mai popular
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold tracking-widest uppercase mb-2 ${plan.highlight ? "text-zinc-500" : "text-zinc-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-zinc-500" : "text-zinc-500"}`}>/ o singură dată</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-zinc-600" : "text-zinc-400"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-black" : "text-green-400"}`}
                    />
                    <span className={plan.highlight ? "text-zinc-700" : "text-zinc-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-3.5 px-6 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "bg-white text-black hover:bg-zinc-100"
                }`}
              >
                {plan.cta} &#8594;
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-zinc-600 text-sm mt-10"
        >
          Ai nevoie de ceva personalizat? Scrie-mi pe WhatsApp și construim un plan adaptat pentru tine.
        </motion.p>
      </div>
    </section>
  );
}
