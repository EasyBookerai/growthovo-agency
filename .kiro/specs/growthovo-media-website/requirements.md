# Requirements Document

## Introduction

Growthovo Media este o agenție digitală care oferă site-uri de prezentare premium la un preț fix de 800 RON, fără taxe de hosting. Această pagină de destinație trebuie să convertească vizitatorii în clienți prin prezentarea ofertei unice, compararea cu agențiile tradiționale și facilitarea contactului direct prin WhatsApp și formular de contact.

## Glossary

- **Landing_Page**: Pagina principală de destinație a Growthovo Media
- **Hero_Section**: Secțiunea de deschidere cu titlul principal și CTA
- **Offer_Section**: Secțiunea "Oferta Growthovo" cu prețul de 800 RON
- **Comparison_Table**: Tabelul comparativ Growthovo vs. Agenții tradiționale
- **Contact_Form**: Formularul minimal de generare de lead-uri
- **WhatsApp_Button**: Butonul flotant de contact WhatsApp
- **Bento_Grid**: Layout în grilă asimetrică pentru secțiunile de servicii
- **Animation_System**: Sistemul de animații Framer Motion
- **Navigation**: Bara de navigare fixă a site-ului

---

## Requirements

### Requirement 1: Hero Section

**User Story:** As a visitor, I want to immediately understand the value proposition of Growthovo Media, so that I can decide if this service is right for my business.

#### Acceptance Criteria

1. THE Landing_Page SHALL display the hero title "Imagine Premium. Costuri Zero Hosting. Rezultate Reale." in a prominent, high-contrast typographic style.
2. THE Landing_Page SHALL display the sub-headline "Construiesc prezența digitală pentru afaceri care vor să domine piața. Site-uri de prezentare de elită, fără taxe ascunse." below the hero title.
3. THE Hero_Section SHALL include a primary CTA button linking to the WhatsApp contact number.
4. WHEN a user visits the page, THE Hero_Section SHALL animate into view with a smooth fade-in effect using Framer Motion.
5. THE Hero_Section SHALL render correctly on mobile devices with a layout that resembles a high-end mobile app.

---

### Requirement 2: Navigation

**User Story:** As a visitor, I want to navigate the page easily, so that I can jump to the sections most relevant to me.

#### Acceptance Criteria

1. THE Navigation SHALL be fixed at the top of the viewport and remain visible during scroll.
2. THE Navigation SHALL display the "Growthovo Media" brand name or logo on the left side.
3. THE Navigation SHALL include anchor links to the main sections: Servicii, Ofertă, Comparație, Contact.
4. WHEN the viewport width is below 768px, THE Navigation SHALL collapse into a mobile-friendly menu.
5. THE Navigation SHALL use a semi-transparent dark background with a backdrop blur effect.

---

### Requirement 3: Services Section (Bento Grid)

**User Story:** As a potential client, I want to see what services Growthovo Media offers, so that I can evaluate if they match my needs.

#### Acceptance Criteria

1. THE Landing_Page SHALL display a services section using a Bento Grid layout.
2. THE Landing_Page SHALL present at least 4 service cards including: Next.js Development, Custom Design, Zero Hosting, and Full Ownership.
3. WHEN a service card enters the viewport, THE Animation_System SHALL trigger a fade-in animation for that card.
4. THE Landing_Page SHALL display each service card with an icon, title, and short description.
5. THE Landing_Page SHALL render the Bento Grid as a single-column layout on mobile devices.

---

### Requirement 4: The "No-Brainer" Offer Section

**User Story:** As a potential client, I want to understand the complete offer at a glance, so that I can make a quick purchasing decision.

#### Acceptance Criteria

1. THE Offer_Section SHALL display the title "Oferta Growthovo: 800 RON - O singură dată."
2. THE Offer_Section SHALL list all four offer bullets: cod sursă ultra-rapid (Next.js), design personalizat, hosting 0 RON pe viață via Vercel, și independență totală.
3. THE Offer_Section SHALL highlight the hosting savings of 500 RON/an.
4. THE Offer_Section SHALL include a CTA button labeled "Vreau să economisesc și să cresc" that opens a WhatsApp link.
5. WHEN the CTA button is clicked, THE Landing_Page SHALL open the WhatsApp link in a new browser tab.
6. THE Offer_Section SHALL use a visually distinct card or panel design to draw attention.

---

### Requirement 5: Comparison Section

**User Story:** As a potential client comparing options, I want to see how Growthovo compares to traditional agencies, so that I can justify my decision.

#### Acceptance Criteria

1. THE Landing_Page SHALL display a comparison table with columns for Growthovo and Agenții Tradiționale.
2. THE Comparison_Table SHALL include rows for: Preț inițial, Hosting anual, Viteză site, and Proprietatea codului.
3. THE Comparison_Table SHALL show Growthovo values: 800 RON, 0 RON, 100/100, Codul tău.
4. THE Comparison_Table SHALL show Agenții values: 3000 RON+, 500 RON/an, Viteză Medie, Cod blocat.
5. THE Comparison_Table SHALL visually highlight the Growthovo column as the superior choice using accent color styling.

---

### Requirement 6: Contact Form

**User Story:** As a potential client, I want to send a message directly from the website, so that I can inquire about the service without leaving the page.

#### Acceptance Criteria

1. THE Contact_Form SHALL include fields for: Nume, Email, and Mesaj.
2. WHEN a user submits the form with an empty required field, THE Contact_Form SHALL display a validation error message for that field.
3. WHEN a user submits the form with a valid email format, THE Contact_Form SHALL accept the submission.
4. IF a user submits the form with an invalid email format, THEN THE Contact_Form SHALL display an error message indicating the email is invalid.
5. THE Contact_Form SHALL include a submit button labeled "Trimite Mesajul".

---

### Requirement 7: Floating WhatsApp Button

**User Story:** As a visitor ready to contact Growthovo, I want a persistent WhatsApp button, so that I can reach out instantly from any point on the page.

#### Acceptance Criteria

1. THE WhatsApp_Button SHALL be fixed in the bottom-right corner of the viewport at all times.
2. THE WhatsApp_Button SHALL display the WhatsApp icon and remain visible during scroll.
3. WHEN the WhatsApp_Button is clicked, THE Landing_Page SHALL open the WhatsApp contact link in a new browser tab.
4. THE WhatsApp_Button SHALL have a hover animation that scales the button slightly.

---

### Requirement 8: Visual Design and Performance

**User Story:** As a visitor, I want the website to feel premium and load fast, so that I trust the quality of Growthovo's work.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a pure black (#000000) background throughout.
2. THE Landing_Page SHALL use high-contrast accent colors (neon silver or electric white) for headings and CTAs.
3. THE Landing_Page SHALL be built with Next.js App Router and Tailwind CSS.
4. THE Animation_System SHALL use Framer Motion for all entrance animations.
5. THE Landing_Page SHALL be fully responsive and render correctly on viewports from 320px to 1920px wide.
6. THE Landing_Page SHALL use a dark luxury, minimalist aesthetic consistent across all sections.
