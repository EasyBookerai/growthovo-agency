export const WHATSAPP_LINK =
  "https://wa.me/40734462634?text=Buna%20ziua%2C%20vreau%20sa%20aflu%20mai%20multe%20despre%20oferta%20Growthovo";

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  size?: "large";
}

export const SERVICES: Service[] = [
  {
    id: "nextjs",
    icon: "Zap",
    title: "Next.js Ultra-Rapid",
    description:
      "Cod sursă optimizat pentru viteză maximă. 100/100 pe Google PageSpeed garantat.",
    size: "large",
  },
  {
    id: "design",
    icon: "Palette",
    title: "Design Personalizat",
    description:
      "Nu template-uri obosite. Fiecare pixel gândit pentru brandul tău.",
  },
  {
    id: "hosting",
    icon: "Server",
    title: "Hosting 0 RON pe Viață",
    description:
      "Deploy pe Vercel. Economisești 500 RON/an față de hosting tradițional.",
  },
  {
    id: "ownership",
    icon: "Key",
    title: "Independență Totală",
    description:
      "Domeniul e pe numele tău. Codul e al tău. Nicio dependență de agenție.",
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile-First",
    description:
      "Arată ca o aplicație premium pe orice dispozitiv. Experiență fluidă.",
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO Optimizat",
    description:
      "Structură tehnică corectă din prima zi. Vizibil pe Google de la lansare.",
  },
];

export interface ComparisonRow {
  label: string;
  growthovo: string;
  agency: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Preț inițial", growthovo: "800 RON", agency: "3000 RON+" },
  { label: "Hosting anual", growthovo: "0 RON", agency: "500 RON/an" },
  { label: "Viteză site", growthovo: "100/100", agency: "Viteză Medie" },
  {
    label: "Proprietatea codului",
    growthovo: "Codul tău",
    agency: "Cod blocat",
  },
];

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Numele este obligatoriu.";
  if (!data.email.trim()) {
    errors.email = "Email-ul este obligatoriu.";
  } else if (!validateEmail(data.email)) {
    errors.email = "Adresa de email nu este validă.";
  }
  if (!data.message.trim()) errors.message = "Mesajul este obligatoriu.";
  return errors;
}

