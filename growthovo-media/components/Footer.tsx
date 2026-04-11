import { WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 py-10 px-4 sm:px-6" aria-label="Footer">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Top row: brand + nav links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-600 text-sm">
            &copy; {year}{" "}
            <span className="text-zinc-400 font-medium">Growthovo Media</span>.
            Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#services" className="hover:text-zinc-400 transition-colors">Servicii</a>
            <a href="#pricing" className="hover:text-zinc-400 transition-colors">Prețuri</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">WhatsApp</a>
          </div>
        </div>

        {/* Legal info */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col gap-3 text-zinc-600 text-xs leading-relaxed">
          <p>
            <span className="text-zinc-400 font-medium">Growthovo Media</span> — servicii de creare site-uri web.
            Prețurile afișate sunt în EUR și includ TVA acolo unde este aplicabil.
            Plata se efectuează integral înainte de livrare. Nu există taxe recurente sau abonamente ascunse.
          </p>
          <p>
            În conformitate cu legislația română și europeană privind protecția consumatorilor,
            aveți dreptul de a depune o reclamație la{" "}
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline hover:text-zinc-400 transition-colors"
            >
              ANPC (Autoritatea Națională pentru Protecția Consumatorilor)
            </a>.
          </p>
        </div>

        {/* ANPC badges */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Soluționarea Alternativă a Litigiilor - ANPC SAL"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg"
              alt="Soluționarea Alternativă a Litigiilor"
              width={150}
              height={50}
              style={{ display: "inline-block" }}
            />
          </a>
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Soluționarea Online a Litigiilor - ANPC SOL"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg"
              alt="Soluționarea Online a Litigiilor"
              width={150}
              height={50}
              style={{ display: "inline-block" }}
            />
          </a>
        </div>

      </div>
    </footer>
  );
}
