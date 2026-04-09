"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Server, Key, Smartphone, TrendingUp } from "lucide-react";
import { SERVICES, type Service } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap, Palette, Server, Key, Smartphone, TrendingUp,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.icon];
  const isLarge = service.size === "large";

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-800/50 ${isLarge ? "md:col-span-2" : ""}`}
      data-testid="service-card"
    >
      <div className="absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 mb-4">
          {Icon && <Icon size={18} className="text-white" />}
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto"
      aria-label="Services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-3">
          Ce primești
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Tot ce ai nevoie.
          <br />
          <span className="text-zinc-400">Nimic în plus.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
}
