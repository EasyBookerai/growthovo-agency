# Design Document: Growthovo Media Website

## Overview

Growthovo Media Landing Page este o pagină de conversie single-page construită cu Next.js 14 (App Router), Tailwind CSS și Framer Motion. Scopul principal este conversia vizitatorilor în clienți prin prezentarea ofertei de 800 RON într-un cadru vizual dark-luxury, minimalist. Pagina este complet statică (fără backend), cu formularul de contact trimis via mailto sau un serviciu third-party (Formspree).

## Architecture

```
growthovo-media/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page - composes all sections
│   └── globals.css         # Tailwind base + custom CSS vars
├── components/
│   ├── Navigation.tsx      # Fixed navbar with blur
│   ├── HeroSection.tsx     # Hero with UVP + CTA
│   ├── ServicesSection.tsx # Bento Grid services
│   ├── OfferSection.tsx    # 800 RON offer card
│   ├── ComparisonSection.tsx # Comparison table
│   ├── ContactSection.tsx  # Contact form
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── Footer.tsx          # Minimal footer
├── lib/
│   └── constants.ts        # WhatsApp link, colors, copy
├── public/
│   └── (placeholder images)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

**Stack:**
- Next.js 14 App Router (static export capable)
- Tailwind CSS v3
- Framer Motion v11
- TypeScript

## Components and Interfaces

### Navigation
- Fixed top bar, `position: fixed`, `z-index: 50`
- Background: `bg-black/80 backdrop-blur-md`
- Brand name left, anchor links right
- Mobile: hamburger menu toggling a full-screen overlay
- Smooth scroll to sections via `href="#section-id"`

### HeroSection
- Full viewport height (`min-h-screen`)
- Centered content with large typographic hierarchy
- Title: `text-5xl md:text-7xl font-black tracking-tight text-white`
- Sub-headline: `text-lg md:text-xl text-zinc-400`
- CTA button: pill shape, white background, black text (inverted for contrast)
- Background: pure black with subtle radial gradient glow at center
- Framer Motion: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`

### ServicesSection (Bento Grid)
- CSS Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with varying `col-span` and `row-span`
- Cards: `bg-zinc-900 border border-zinc-800 rounded-2xl p-6`
- Each card: icon (Lucide React), title, description
- Framer Motion: `whileInView` with staggered children

**Service Cards:**
1. Next.js Ultra-Fast (large card, col-span-2)
2. Design Personalizat
3. Hosting 0 RON pe Viață
4. Independență Totală
5. Mobile-First
6. SEO Optimizat

### OfferSection
- Centered card with glowing border: `border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.05)]`
- Price badge: large `800 RON` in white, `O singură dată` in zinc-400
- Bullet list with checkmark icons
- CTA button: full-width, white bg, black text
- Framer Motion: scale-in animation on viewport entry

### ComparisonSection
- Two-column table layout
- Growthovo column: highlighted with white border and subtle white glow
- Traditional agencies column: muted zinc styling
- Row items with icons (checkmark vs. X)

### ContactSection
- Minimal form: 3 fields (Nume, Email, Mesaj)
- Input styling: `bg-zinc-900 border border-zinc-800 focus:border-white`
- Client-side validation with React state
- Submit: POST to Formspree endpoint (or mailto fallback)

### WhatsAppButton
- `position: fixed`, `bottom: 24px`, `right: 24px`
- Green WhatsApp color: `#25D366`
- Circle button with WhatsApp SVG icon
- Framer Motion: `whileHover={{ scale: 1.1 }}`, `whileTap={{ scale: 0.95 }}`
- Pulse animation ring for attention

## Data Models

```typescript
// lib/constants.ts
export const WHATSAPP_LINK = "https://wa.me/40XXXXXXXXX?text=Buna%20ziua%2C%20vreau%20sa%20aflu%20mai%20multe%20despre%20oferta%20Growthovo";

export const SERVICES = [
  {
    id: "nextjs",
    icon: "Zap",
    title: "Next.js Ultra-Rapid",
    description: "Cod sursă optimizat pentru viteză maximă. 100/100 pe Google PageSpeed.",
    size: "large" // col-span-2
  },
  {
    id: "design",
    icon: "Palette",
    title: "Design Personalizat",
    description: "Nu template-uri obosite. Fiecare pixel gândit pentru brandul tău."
  },
  {
    id: "hosting",
    icon: "Server",
    title: "Hosting 0 RON pe Viață",
    description: "Deploy pe Vercel. Economisești 500 RON/an față de hosting tradițional."
  },
  {
    id: "ownership",
    icon: "Key",
    title: "Independență Totală",
    description: "Domeniul e pe numele tău. Codul e al tău. Nicio dependență."
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile-First",
    description: "Arată ca o aplicație premium pe orice dispozitiv."
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO Optimizat",
    description: "Structură tehnică corectă din prima zi. Vizibil pe Google."
  }
];

export const COMPARISON_ROWS = [
  { label: "Preț inițial", growthovo: "800 RON", agency: "3000 RON+", growthovo_wins: true },
  { label: "Hosting anual", growthovo: "0 RON", agency: "500 RON/an", growthovo_wins: true },
  { label: "Viteză site", growthovo: "100/100", agency: "Viteză Medie", growthovo_wins: true },
  { label: "Proprietatea codului", growthovo: "Codul tău", agency: "Cod blocat", growthovo_wins: true }
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
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

Property 1: Contact form rejects empty required fields
*For any* form submission where one or more required fields (Nume, Email, Mesaj) are empty or whitespace-only, the form SHALL NOT submit and SHALL display a validation error for each empty field.
**Validates: Requirements 6.1, 6.2**

Property 2: Email format validation
*For any* string submitted as an email address, the form SHALL accept it if and only if it matches a valid email pattern (contains "@" and a domain), and SHALL reject all other strings with an error message.
**Validates: Requirements 6.3, 6.4**

Property 3: WhatsApp link opens in new tab
*For any* click on the WhatsApp CTA button or the floating WhatsApp button, the resulting navigation SHALL target `_blank` (new tab) and SHALL use the configured WhatsApp URL.
**Validates: Requirements 4.5, 7.3**

Property 4: Comparison table data integrity
*For any* rendering of the Comparison_Table, all four rows SHALL be present and each Growthovo value SHALL differ from the corresponding agency value.
**Validates: Requirements 5.2, 5.3, 5.4**

Property 5: Responsive layout invariant
*For any* viewport width between 320px and 1920px, no content SHALL overflow its container horizontally, and all interactive elements SHALL remain accessible (not clipped or hidden).
**Validates: Requirements 8.5**

## Error Handling

- **Form validation**: Client-side only. Errors shown inline below each field. No server round-trip for validation.
- **Form submission failure**: If Formspree returns an error, display a toast/inline message "Eroare la trimitere. Încearcă din nou sau contactează-ne pe WhatsApp."
- **Missing images**: All `<Image>` components use `placeholder="blur"` with a dark blurDataURL fallback so layout never breaks.
- **JavaScript disabled**: Core content (text, links) remains accessible. Animations degrade gracefully.

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)
- Test `ContactSection` form validation logic:
  - Empty name → error shown
  - Empty email → error shown
  - Invalid email format → error shown
  - Valid submission → no errors, submit called
- Test `ComparisonSection` renders all 4 rows with correct data
- Test `WhatsAppButton` renders with correct `href` and `target="_blank"`

### Property-Based Tests (fast-check + Vitest)
Each property test runs minimum 100 iterations.

- **Property 1**: Generate arbitrary form states with empty/whitespace fields → assert validation errors present
  - Tag: `Feature: growthovo-media-website, Property 1: form rejects empty fields`
- **Property 2**: Generate arbitrary strings as email input → assert acceptance iff valid email pattern
  - Tag: `Feature: growthovo-media-website, Property 2: email format validation`
- **Property 3**: Render WhatsApp buttons → assert all have `target="_blank"` and correct href
  - Tag: `Feature: growthovo-media-website, Property 3: WhatsApp opens new tab`
- **Property 4**: Render comparison table with data → assert all rows present and values differ
  - Tag: `Feature: growthovo-media-website, Property 4: comparison table data integrity`
