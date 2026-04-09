import { WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 py-10 px-4 sm:px-6" aria-label="Footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-zinc-600 text-sm">
          © {year}{" "}
          <span className="text-zinc-400 font-medium">Growthovo Media</span>.
          All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <a href="#services" className="hover:text-zinc-400 transition-colors">Servicii</a>
          <a href="#pricing" className="hover:text-zinc-400 transition-colors">Prețuri</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
