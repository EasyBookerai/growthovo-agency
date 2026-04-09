# Implementation Plan: Growthovo Media Website

## Overview

Implementare incrementală a landing page-ului Growthovo Media. Fiecare task construiește pe cel anterior, terminând cu integrarea completă a tuturor componentelor.

## Tasks

- [x] 1. Project setup - Next.js, Tailwind, Framer Motion
  - Inițializează proiectul Next.js 14 cu App Router și TypeScript
  - Configurează Tailwind CSS cu tema custom (culori, fonturi)
  - Instalează Framer Motion și Lucide React
  - Creează `lib/constants.ts` cu WHATSAPP_LINK, SERVICES, COMPARISON_ROWS și tipurile TypeScript
  - Configurează `globals.css` cu variabilele CSS și stilurile de bază
  - _Requirements: 8.3, 8.1_

- [x] 2. Navigation component
  - [x] 2.1 Implementează `components/Navigation.tsx`
    - Fixed top bar cu `bg-black/80 backdrop-blur-md`
    - Brand name stânga, anchor links dreapta
    - Hamburger menu pentru mobile cu state toggle
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  - [x] 2.2 Scrie unit tests pentru Navigation
    - Verifică prezența brand name-ului
    - Verifică prezența tuturor anchor link-urilor
    - _Requirements: 2.2, 2.3_

- [x] 3. Hero Section
  - [x] 3.1 Implementează `components/HeroSection.tsx`
    - Full viewport height, conținut centrat
    - Titlu UVP, sub-headline, CTA button cu link WhatsApp
    - Framer Motion fade-in animație la mount
    - Radial gradient glow pe fundal negru
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
  - [x] 3.2 Scrie unit tests pentru HeroSection
    - Verifică titlul UVP prezent în render
    - Verifică sub-headline prezent
    - Verifică CTA button cu href WhatsApp corect
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 4. Services Section (Bento Grid)
  - [x] 4.1 Implementează `components/ServicesSection.tsx`
    - CSS Grid bento layout cu col-span variabil
    - Renderizează toate cardurile din SERVICES constant
    - Fiecare card: icon Lucide, titlu, descriere
    - Framer Motion `whileInView` cu stagger pe copii
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_
  - [x] 4.2 Scrie property test pentru service cards
    - **Property 3: Service cards completeness**
    - **Validates: Requirements 3.2, 3.4**
    - Pentru orice randare a ServicesSection, fiecare card din SERVICES trebuie să aibă titlu și descriere vizibile
  - [x] 4.3 Scrie unit tests pentru ServicesSection
    - Verifică că sunt randate cel puțin 4 carduri
    - _Requirements: 3.2_

- [x] 5. Offer Section
  - [x] 5.1 Implementează `components/OfferSection.tsx`
    - Card centrat cu border glow
    - Titlu "Oferta Growthovo: 800 RON - O singură dată."
    - Lista cu 4 bullet-uri și checkmark icons
    - Evidențierea economiei de 500 RON/an
    - CTA button full-width cu link WhatsApp în tab nou
    - Framer Motion scale-in la viewport entry
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [x] 5.2 Scrie property test pentru WhatsApp links
    - **Property 3: WhatsApp links open in new tab**
    - **Validates: Requirements 4.5, 7.3**
    - Pentru orice link WhatsApp de pe pagină, target trebuie să fie "_blank" și href să conțină "wa.me"

- [x] 6. Comparison Section
  - [x] 6.1 Implementează `components/ComparisonSection.tsx`
    - Tabel cu două coloane: Growthovo vs. Agenții
    - Coloana Growthovo evidențiată cu border alb
    - Toate cele 4 rânduri din COMPARISON_ROWS
    - Iconuri checkmark/X pentru fiecare rând
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  - [x] 6.2 Scrie property test pentru comparison table
    - **Property 4: Comparison table data integrity**
    - **Validates: Requirements 5.2, 5.3, 5.4**
    - Pentru orice randare a tabelului, toate rândurile din COMPARISON_ROWS trebuie să fie prezente și valorile Growthovo să difere de valorile agențiilor

- [x] 7. Contact Section cu validare formular
  - [x] 7.1 Implementează `components/ContactSection.tsx`
    - Formular cu câmpurile: Nume, Email, Mesaj
    - Validare client-side cu React state
    - Afișare erori inline sub fiecare câmp
    - Submit button "Trimite Mesajul"
    - Integrare Formspree sau mailto fallback
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [x] 7.2 Scrie property test pentru validare câmpuri goale
    - **Property 1: Form rejects empty required fields**
    - **Validates: Requirements 6.2**
    - Pentru orice combinație de câmpuri goale/whitespace, submit-ul trebuie să producă erori de validare
  - [x] 7.3 Scrie property test pentru validare email
    - **Property 2: Email format validation**
    - **Validates: Requirements 6.3, 6.4**
    - Pentru orice string valid de email, formularul trebuie să îl accepte; pentru orice string invalid, să îl respingă

- [x] 8. Checkpoint - Verifică că toate componentele se randează corect
  - Asigură-te că toate testele trec, întreabă utilizatorul dacă apar probleme.

- [x] 9. Floating WhatsApp Button
  - [x] 9.1 Implementează `components/WhatsAppButton.tsx`
    - Fixed bottom-right, z-index ridicat
    - Buton circular verde (#25D366) cu icon WhatsApp SVG
    - Link cu target="_blank" și href din WHATSAPP_LINK
    - Framer Motion: whileHover scale, whileTap scale, pulse ring animație
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  - [x] 9.2 Scrie unit test pentru WhatsApp button
    - Verifică target="_blank" și href corect
    - _Requirements: 7.1, 7.3_

- [x] 10. Footer
  - Implementează `components/Footer.tsx`
  - Copyright text, link-uri sociale minimale
  - _Requirements: 8.6_

- [x] 11. Asamblare finală în app/page.tsx
  - Importă și compune toate componentele în ordinea corectă
  - Adaugă id-uri de secțiune pentru anchor navigation
  - Configurează metadata Next.js (title, description, OG tags)
  - Verifică smooth scroll behavior în globals.css
  - _Requirements: 1.1, 2.3, 8.1, 8.5_

- [x] 12. Checkpoint final - Verifică că toate testele trec
  - Asigură-te că toate testele trec, întreabă utilizatorul dacă apar probleme.

## Notes

- Toate task-urile sunt obligatorii pentru o implementare completă și testată
- Fiecare task referențiază cerințele specifice pentru trasabilitate
- Property tests folosesc fast-check cu minimum 100 iterații
- Unit tests folosesc Vitest + React Testing Library
