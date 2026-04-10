"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/constants";

export default function ComparisonSection() {
  return (
    <section
      id="compare"
      className="py-24 px-4 sm:px-6"
      aria-label="Growthovo vs Agenții Tradiționale"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-3">
            Alegerea inteligentă
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Growthovo vs.{" "}
            <span className="text-zinc-500">Agenții Tradiționale</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-zinc-800"
          role="table"
          aria-label="Tabel comparativ: Growthovo vs Agenții"
        >
          <div className="grid grid-cols-3 bg-zinc-900" role="row">
            <div className="p-4 text-zinc-500 text-sm font-medium" role="columnheader">
              Caracteristică
            </div>
            <div className="p-4 text-center border-l border-r border-white/10 bg-white/5" role="columnheader">
              <span className="text-white font-bold text-sm">Growthovo</span>
              <div className="text-xs text-green-400 mt-0.5">Alegerea inteligentă</div>
            </div>
            <div className="p-4 text-center" role="columnheader">
              <span className="text-zinc-500 font-medium text-sm">Agenții</span>
              <div className="text-xs text-zinc-600 mt-0.5">Metoda veche</div>
            </div>
          </div>

          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-t border-zinc-800 ${index % 2 === 0 ? "bg-black" : "bg-zinc-900/30"}`}
              role="row"
              data-testid="comparison-row"
            >
              <div className="p-4 flex items-center">
                <span className="text-zinc-400 text-sm">{row.label}</span>
              </div>
              <div className="p-4 flex items-center justify-center gap-2 border-l border-r border-white/10 bg-white/[0.02]">
                <Check size={14} className="text-green-400 flex-shrink-0" />
                <span className="text-white font-semibold text-sm">{row.growthovo}</span>
              </div>
              <div className="p-4 flex items-center justify-center gap-2">
                <X size={14} className="text-red-500/60 flex-shrink-0" />
                <span className="text-zinc-500 text-sm">{row.agency}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-zinc-600 text-sm mt-6"
        >
          *Economii calculate pe 3 ani față de o agenție tradițională cu hosting inclus.
        </motion.p>
      </div>
    </section>
  );
}
