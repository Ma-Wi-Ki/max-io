

# MAX<>IO Group — Marketing Website Plan

## Overview
A sleek, premium marketing website for MAX<>IO Group built in React + Vite + Tailwind CSS. Nine pages, full copy, micro-interactions, and a working lead capture form backed by Supabase.

---

## 1. Design System & Theme

- **Palette**: Near-black (`#0A0A0A`), charcoal (`#1C1C1E`), slate (`#3A3A3C`), off-white (`#F5F5F7`), silver accents (`#C0C0C0` / metallic gradients)
- **Typography**: Inter font, strong hierarchy (large bold headings, clean body text)
- **Components**: Container, Section, Heading, Button (primary/secondary/ghost with silver sheen hover), Card (hover lift + silver edge), Badge, Divider
- **Animations**: Scroll-reveal (fade + translateY), staggered list reveals, hover micro-interactions (card lift, button sheen, underline slide), subtle parallax on hero accents — all respecting `prefers-reduced-motion`

---

## 2. Site Structure & Navigation

- **Sticky header** with logo, nav links (Home, Services, Pricing, Case Studies, About, Contact), and primary CTA button "Book a Screening Call"
- **Footer** with contact info, ABN placeholder, social media placeholders, and Privacy/Terms links
- **Mobile-first** responsive layout with hamburger menu
- **Smooth scroll** with active section highlighting on the Home page via IntersectionObserver
- **Every page** ends with a strong CTA section

---

## 3. Pages

### Home (`/`)
Seven sections as specified: Hero with dual CTAs, Problem/Reality bullets, Four service cards, 3-step process, Pricing preview, Partner routing, and final CTA block. All copy as provided in the brief.

### Services (`/services`)
Four detailed service packages (Digital Upgrade, Cyber Security, Research & Writing, Strategy & Mindset) each with Who it's for, Deliverables, Typical targets, and Exclusions.

### Pricing (`/pricing`)
Screening call (Free), three retainer tiers ($5k/$10k/$15k), day rates, payment terms, and explicit scope boundaries.

### Case Studies (`/case-studies`)
Three illustrative examples (Trade services, Retail/storefront, SME/startup) with Starting point, Changes made, 90-day targets, and Deliverables — clearly labelled as targets, not results.

### About (`/about`)
Boutique advisory positioning, partner blurbs (Meija, Growth Engineer, Coyne Capital), and founder bio placeholder.

### Contact (`/contact`)
- Booking embed placeholder (Calendly-style component)
- Five screening questions displayed as checklist
- Full lead capture form: name, email, phone, business name, industry, headcount, current tools, top bottleneck, budget range (dropdown), notes
- On submit → saves to Supabase `leads` table → redirects to `/thank-you`

### Thank You (`/thank-you`)
Confirmation message after form submission with next steps.

### Privacy (`/privacy`) & Terms (`/terms`)
Simple legal templates with placeholder content.

---

## 4. Content Management

All website copy stored in a centralised `/content/site.ts` file as typed TypeScript objects for easy editing.

---

## 5. Backend (Lovable Cloud + Supabase)

- **Supabase table**: `leads` — stores all form submissions (name, email, phone, business_name, industry, headcount, current_tools, top_bottleneck, budget_range, notes, created_at)
- **Edge function**: `send-lead-notification` — triggers on new lead submission to send email notification via Lovable Cloud email
- **Row Level Security**: Configured so leads can only be inserted (not read/updated/deleted) from the client

---

## 6. SEO & Performance

- Page titles and meta descriptions per route using `react-helmet` or equivalent
- OpenGraph tags for social sharing
- Optimised images and minimal dependencies
- Accessible: keyboard navigation, ARIA labels, focus states, reduced-motion support

