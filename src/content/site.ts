export const siteConfig = {
  name: "MAX<>IO Group",
  tagline: "Turn operational chaos into measurable 90-day outcomes.",
  description: "Automation, cyber baselining, research-grade documentation, and an operator cadence that actually sticks.",
  abn: "ABN XX XXX XXX XXX",
  email: "hello@maxio.group",
  phone: "+61 XXX XXX XXX",
};

export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Book a Screening Call", href: "/contact" },
};

export const home = {
  hero: {
    h1: "Turn operational chaos into measurable 90-day outcomes.",
    sub: "Automation, cyber baselining, research-grade documentation, and an operator cadence that actually sticks.",
    cta1: "Book a Screening Call",
    cta2: "Get a 90-Day Plan",
    trust: "Built for trades, storefronts, and SMEs that run on speed — not admin.",
  },
  problem: {
    title: "Most businesses don't have a tech problem. They have a throughput problem.",
    bullets: [
      "Leads fall through cracks.",
      "Quoting and invoicing are slow and inconsistent.",
      "Tools don't talk. People fill spreadsheets instead.",
      'No one can answer: "What\'s working this week?"',
      "Cyber risk is invisible until it isn't.",
    ],
  },
  services: {
    title: "Four ways we create leverage.",
    cards: [
      {
        title: "90-Day Digital Upgrade & Automation",
        line: "Map workflows, standardise delivery, and automate the manual work.",
        targets: "Typical targets: 10–30 hours/week saved. Lead response time under 5 minutes. Faster invoice-to-cash.",
      },
      {
        title: "Cyber Security Analysis (Practical)",
        line: "Reduce account takeover risk. Define backups, recovery, and incident response.",
        targets: "Typical target: MFA + baseline hardening within 14 days.",
      },
      {
        title: "Research & Strategic Writing",
        line: "White papers, grant-ready narratives, evidence tables, citation discipline.",
        targets: "Submission-ready output with source log.",
      },
      {
        title: "Strategy & Mindset (Operator Coaching)",
        line: "A weekly cadence, KPI clarity, and decision rules to keep execution predictable.",
        targets: "Typical target: fewer 'urgent' fires within 4–6 weeks.",
      },
    ],
  },
  process: {
    title: "A simple 90-day cycle.",
    steps: [
      { step: "Step 1", title: "Diagnose (Week 1–2)", desc: "Find bottlenecks, map flow, set metrics." },
      { step: "Step 2", title: "Build (Week 3–6)", desc: "Implement stack, automations, SOPs, training." },
      { step: "Step 3", title: "Scale (Week 7–12)", desc: "Refine, dashboard, enforce cadence, lock in gains." },
    ],
  },
  pricing: {
    title: "Clear pricing. Tight scope.",
    screening: "Free (fit check first).",
    retainers: "$5k–$15k/month (3-month minimum).",
    projects: "40/40/20 payment option.",
  },
  partners: {
    title: "Specialists when needed.",
    list: [
      { name: "Meija", desc: "Creative, brand, content, landing pages, ads." },
      { name: "Growth Engineer", desc: "Funnels, automation stack, analytics, CRM, outbound." },
      { name: "Coyne Capital", desc: "Funding strategy, investor materials, capital structure." },
    ],
    line: "We remain accountable for outcomes — partners extend capability.",
  },
  cta: {
    title: "If you want measurable change in 90 days, start here.",
    cta1: "Book a Screening Call",
    cta2: "Get a 90-Day Plan",
  },
};

export const services = {
  intro: "Pick the lever that matches your constraint: time, risk, evidence, or execution.",
  packages: [
    {
      title: "90-Day Digital Upgrade & Automation",
      who: "Trades, storefronts, and SMEs drowning in admin and manual processes.",
      deliverables: [
        "Workflow map (lead → cash)",
        "SOPs + templates",
        "CRM/job management setup",
        "Automations (Zapier/Make)",
        "KPI dashboard",
        "Staff training",
      ],
      targets: [
        "10–30 hours/week saved",
        "Lead response time ↓",
        "Invoice cycle time ↓",
        "Close rate ↑",
      ],
      exclusions: [
        "Paid ads management",
        "Custom software development",
        "Full IT helpdesk",
      ],
    },
    {
      title: "Cyber Security Analysis (Lightweight, Practical)",
      who: "Any business that hasn't done a formal security review — or hasn't updated one in 12+ months.",
      deliverables: [
        "Risk register",
        "MFA/password policy",
        "Email/device hardening plan",
        "Backup & recovery plan",
        "Incident response playbook",
        "Vendor review",
      ],
      targets: [
        "Reduced account takeover risk",
        "Recovery objectives defined",
      ],
      exclusions: [
        "Penetration testing",
        "SOC 2 / ISO certification",
        "24/7 monitoring",
      ],
    },
    {
      title: "Research & Academic Writing",
      who: "Founders, executives, and academics who need defensible, well-sourced documents.",
      deliverables: [
        "Literature review / evidence table",
        "White paper / grant narrative / case study",
        "Citation + source log",
        "Formatting + submission readiness",
      ],
      targets: [
        "Submission-ready, defensible document",
      ],
      exclusions: [
        "Ghostwriting without attribution",
        "Academic fraud",
      ],
    },
    {
      title: "Strategy & Mindset (Operator Coaching)",
      who: "Owners and operators who want predictable execution, not more ideas.",
      deliverables: [
        "90-day operating system",
        "Weekly cadence + KPI sheet",
        "Decision rules",
        "Accountability loop",
      ],
      targets: [
        "Predictable weekly output",
        "Reduced indecision and rework",
      ],
      exclusions: [
        "Life coaching",
        "Therapy / counselling",
      ],
    },
  ],
};

export const pricing = {
  title: "Pricing that matches outcomes.",
  tiers: [
    {
      name: "Screening",
      price: "Free",
      desc: "If it's a fit, we propose a 90-day scope.",
      features: ["30-minute video call", "Fit assessment", "No obligation"],
    },
    {
      name: "Foundation",
      price: "$5k/month",
      desc: "Small teams / simple stack.",
      features: ["Single workflow focus", "Weekly check-in", "3-month minimum"],
      recommended: false,
    },
    {
      name: "Scale",
      price: "$10k/month",
      desc: "SMEs / multi-workflow.",
      features: ["Multiple workflows", "Bi-weekly strategy", "Priority support", "3-month minimum"],
      recommended: true,
    },
    {
      name: "Dominant",
      price: "$15k/month",
      desc: "Multi-site / high volume / high risk.",
      features: ["Full-scope engagement", "Weekly strategy", "On-call support", "3-month minimum"],
      recommended: false,
    },
  ],
  dayRates: [
    { type: "Remote", rate: "$1,800/day" },
    { type: "Onsite", rate: "$2,500/day" },
  ],
  terms: [
    "3-month minimum engagement",
    "First month upfront",
    "Optional 40/40/20 for fixed projects",
  ],
  scopeBoundaries: [
    "Ads management",
    "Legal certification",
    "Bookkeeping",
    "Custom app builds",
    "24/7 IT support",
  ],
};

export const caseStudies = {
  title: "Illustrative examples.",
  sub: "These are typical engagements — targets, not results. Every business is different.",
  cases: [
    {
      title: "Trade services (10 staff): lead-to-cash velocity",
      starting: "Leads tracked in a shared inbox. Quoting done manually in Word. No follow-up system. Invoice delays averaging 14 days.",
      changes: [
        "CRM setup with automated lead capture",
        "Quoting templates with e-sign",
        "Automated follow-up sequences",
        "Job-to-invoice automation",
      ],
      targets: [
        "Lead response time: under 5 minutes",
        "Quote turnaround: same day",
        "Invoice cycle: reduced by 10 days",
        "20+ hours/week admin saved",
      ],
      deliverables: ["Workflow map", "CRM config", "SOPs", "KPI dashboard", "Staff training"],
    },
    {
      title: "Retail/storefront: follow-up + reporting",
      starting: "No customer database. Marketing spend with zero attribution. Staff using personal phones for customer comms.",
      changes: [
        "POS-integrated customer database",
        "Automated post-purchase follow-up",
        "Weekly sales reporting dashboard",
        "Staff communication policy + tools",
      ],
      targets: [
        "Repeat purchase rate: +15%",
        "Marketing ROI visibility: full attribution",
        "Staff response consistency: standardised",
      ],
      deliverables: ["Customer database", "Automation flows", "Reporting dashboard", "Communication SOPs"],
    },
    {
      title: "SME/startup: CRM + automation + cyber baseline",
      starting: "Founder doing everything. No CRM. Passwords in a spreadsheet. No backup strategy. Growing team with no SOPs.",
      changes: [
        "CRM with pipeline automation",
        "MFA + password manager rollout",
        "Backup & recovery plan",
        "SOPs for core processes",
        "Weekly operating cadence",
      ],
      targets: [
        "Pipeline visibility: full funnel view",
        "Account takeover risk: baseline hardened",
        "Founder admin time: reduced by 15 hours/week",
      ],
      deliverables: ["CRM config", "Security baseline", "SOPs", "Operating cadence", "KPI sheet"],
    },
  ],
};

export const about = {
  title: "Boutique advisory. Execution-first.",
  points: [
    "We design systems that reduce admin, tighten delivery, and make performance visible.",
    "We stay small on purpose: high leverage work, tight scope, measurable outputs.",
    "Partners extend capability; MAX<>IO remains accountable.",
  ],
  partners: [
    {
      name: "Meija",
      desc: "Creative, brand, content, landing pages, ads. When your message needs to land, Meija makes it stick.",
    },
    {
      name: "Growth Engineer",
      desc: "Funnels, automation stack, analytics, CRM, outbound. When you need the plumbing to scale, Growth Engineer builds it.",
    },
    {
      name: "Coyne Capital",
      desc: "Funding strategy, investor materials, capital structure. When capital is the constraint, Coyne Capital navigates it.",
    },
  ],
  founder: {
    name: "[Founder Name]",
    bio: "Placeholder bio — operational background, advisory experience, and commitment to measurable 90-day outcomes. Update this section with the founder's actual bio.",
  },
};

export const contact = {
  title: "Book a screening call.",
  sub: "Answer five questions. We'll confirm fit and propose a 90-day plan.",
  questions: [
    "What are your top 5 bottlenecks (ranked)?",
    "What systems do you run today and what's breaking (or manual)?",
    "What's your AI/digital experience level (none/basic/moderate/advanced)?",
    "Needs vs wants: list each (max 5 items).",
    "Define success in 90 days using 3 numbers (e.g., margin %, hours saved/week, leads/week, cash collected).",
  ],
  budgetRanges: [
    "Under $5k/month",
    "$5k–$10k/month",
    "$10k–$15k/month",
    "$15k+/month",
    "Not sure yet",
  ],
};

export const thankYou = {
  title: "Thanks for reaching out.",
  message: "We've received your details. If it's a fit, we'll be in touch within 2 business days to schedule your screening call.",
  nextSteps: [
    "We review your submission",
    "If there's a fit, we schedule a 30-minute screening call",
    "After the call, you receive a 90-day scope proposal",
  ],
};

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "February 2026",
  content: `MAX<>IO Group ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

**Information We Collect**
We may collect personal information that you voluntarily provide when you fill out our contact form, including your name, email address, phone number, business name, and other details you choose to share.

**How We Use Your Information**
We use the information we collect to respond to your enquiries, provide our services, and communicate with you about our offerings.

**Data Storage**
Your information is stored securely and is only accessible to authorised team members. We do not sell your personal information to third parties.

**Your Rights**
You have the right to access, correct, or delete your personal information. Contact us at ${siteConfig.email} to exercise these rights.

**Changes to This Policy**
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

**Contact Us**
If you have questions about this Privacy Policy, please contact us at ${siteConfig.email}.`,
};

export const terms = {
  title: "Terms of Service",
  lastUpdated: "February 2026",
  content: `These Terms of Service ("Terms") govern your use of the MAX<>IO Group website and services.

**Acceptance of Terms**
By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.

**Services**
MAX<>IO Group provides operational advisory, digital automation, cyber security analysis, research and writing, and strategy coaching services. All engagements are subject to a separate service agreement.

**Intellectual Property**
All content on this website, including text, graphics, logos, and software, is the property of MAX<>IO Group and is protected by Australian and international copyright laws.

**Limitation of Liability**
To the fullest extent permitted by law, MAX<>IO Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.

**Governing Law**
These Terms shall be governed by and construed in accordance with the laws of Australia.

**Changes to Terms**
We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this website.

**Contact Us**
If you have questions about these Terms, please contact us at ${siteConfig.email}.`,
};

export const footer = {
  tagline: siteConfig.tagline,
  contact: {
    email: siteConfig.email,
    phone: siteConfig.phone,
  },
  abn: siteConfig.abn,
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const seo = {
  home: { title: "MAX<>IO Group — 90-Day Operational Outcomes", description: "Turn operational chaos into measurable 90-day outcomes. Automation, cyber security, research, and operator coaching for trades, storefronts, and SMEs." },
  services: { title: "Services — MAX<>IO Group", description: "Digital automation, cyber security analysis, research writing, and operator coaching. Pick the lever that matches your constraint." },
  pricing: { title: "Pricing — MAX<>IO Group", description: "Clear pricing from $5k–$15k/month. Screening calls are free. 3-month minimum engagements with measurable outcomes." },
  caseStudies: { title: "Case Studies — MAX<>IO Group", description: "Illustrative examples of 90-day engagements for trades, retail, and SMEs. Targets, not results." },
  about: { title: "About — MAX<>IO Group", description: "Boutique advisory. Execution-first. High leverage work, tight scope, measurable outputs." },
  contact: { title: "Contact — MAX<>IO Group", description: "Book a screening call. Answer five questions and get a 90-day plan proposal." },
  thankYou: { title: "Thank You — MAX<>IO Group", description: "Thanks for reaching out. We'll be in touch within 2 business days." },
  privacy: { title: "Privacy Policy — MAX<>IO Group", description: "How MAX<>IO Group collects, uses, and protects your information." },
  terms: { title: "Terms of Service — MAX<>IO Group", description: "Terms governing the use of MAX<>IO Group website and services." },
};
