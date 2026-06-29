export type Locale = 'ro' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
    contactTitle: string;
    contactDescription: string;
    ogLocale: string;
  };
  nav: {
    services: string;
    projects: string;
    process: string;
    technologies: string;
    contact: string;
    cta: string;
  };
  header: {
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    homeAria: string;
  };
  footer: {
    tagline: string;
    services: string;
    contact: string;
    contactForm: string;
    rights: string;
    keywords: string;
    serviceLinks: string[];
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mockDashboard: string;
    mockLive: string;
    mockProjects: string;
    mockUptime: string;
    mockApis: string;
    mockProgress: string;
    tags: string[];
  };
  whatWeBuild: {
    label: string;
    title: string;
    description: string;
    audiences: { title: string; description: string; icon: string }[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  problems: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };
  featured: {
    label: string;
    title: string;
    description: string;
    features: string[];
    activeFiles: string;
    exampleUi: string;
    rows: { client: string; status: string; color: string }[];
    note: string;
  };
  saasMvp: {
    label: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  mobile: {
    label: string;
    title: string;
    description: string;
    points: { title: string; description: string }[];
    appTitle: string;
    appSubtitle: string;
  };
  process: {
    label: string;
    title: string;
    description: string;
    steps: { num: string; title: string; description: string }[];
  };
  technologies: {
    label: string;
    title: string;
    description: string;
    groups: { label: string; items: string[] }[];
  };
  pricing: {
    label: string;
    title: string;
    description: string;
    popular: string;
    requestQuote: string;
    note: string;
    packages: { title: string; description: string; price: string; featured: boolean }[];
  };
  faq: {
    label: string;
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  contactCta: {
    title: string;
    description: string;
    button: string;
  };
  contact: {
    title: string;
    subtitle: string;
    success: string;
    requiredFields: string;
    sending: string;
    submit: string;
    footerNote: string;
    genericError: string;
    directTitle: string;
    directSubtitle: string;
    email: string;
    whatsapp: string;
    tipsTitle: string;
    tips: string[];
    form: {
      name: string;
      company: string;
      optional: string;
      email: string;
      phone: string;
      projectType: string;
      budget: string;
      message: string;
      selectType: string;
      selectBudget: string;
      namePlaceholder: string;
      companyPlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
    };
    projectTypes: string[];
    budgetRanges: string[];
    emailSubject: string;
  };
}
