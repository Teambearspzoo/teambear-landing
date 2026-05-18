// Single source of truth for all page copy.
// Components render the Polish strings and tag each element with `data-i18n="<dotted.path>"`.
// The toggle script in Layout.astro embeds this object and, on language switch,
// rewrites each [data-i18n] element's text by resolving the same path on the chosen locale.

export type Lang = 'pl' | 'en';

export const content = {
  pl: {
    nav: { uslugi: 'Usługi', portfolio: 'Portfolio', kontakt: 'Kontakt', talk: 'Porozmawiajmy' },
    hero: {
      eyebrow: 'Cyfryzacja + Automatyzacja',
      title1: 'Przekształcamy procesy',
      title2: 'w przewagę konkurencyjną',
      lead: 'Tworzymy aplikacje webowe łączące elementy BI, CRM, realizujące specyficzne procesy ofertowe oraz sprzedażowe. Automatyzujemy czasochłonne procesy, które wcześniej były wykonywane manualnie.',
      cta1: 'Rozpocznij projekt',
      cta2: 'Zobacz usługi',
      scroll: 'Scroll',
    },
    services: {
      heading1: 'Czym się',
      heading2: 'zajmujemy',
      items: [
        { title: 'Aplikacje webowe', desc: 'Tworzymy aplikacje webowe łączące elementy BI, CRM, realizujące specyficzne procesy ofertowe oraz sprzedażowe.' },
        { title: 'Doradztwo', desc: 'Doradzamy w jaki sposób przełożyć potrzeby biznesowe klientów na konkretne funkcjonalności w systemie.' },
        { title: 'Automatyzacja', desc: 'Automatyzujemy czasochłonne procesy, które wcześniej były wykonywane manualnie.' },
        { title: 'Integracja systemów', desc: 'Integrujemy się z systemami używanymi przez klientów np. ERP.' },
      ],
    },
    way: {
      title1: 'TeamBear',
      title2: 'Way',
      lead: 'Co nas wyróżnia na tle innych firm technologicznych.',
      items: [
        { title: 'Elastyczność', desc: 'Dzięki naszej strukturze organizacyjnej, składającej się z niewielkiego, ale zaangażowanego zespołu, jesteśmy w stanie dostarczać produkty i usługi szybko i elastycznie.' },
        { title: 'Komunikacja', desc: 'Nasze podejście, łączące w sobie najlepsze cechy zarówno korporacyjnej, jak i niekorporacyjnej kultury pracy, sprzyja efektywnej komunikacji.' },
        { title: 'Sposób myślenia', desc: 'Informacje docierają bezpośrednio do osób, które są bezpośrednio odpowiedzialne za wykonanie konkretnego zadania.' },
      ],
    },
    portfolio: {
      heading: 'Portfolio',
      lead: 'Wybrane projekty, które zrealizowaliśmy dla naszych klientów.',
      category: 'Aplikacja webowa',
      projects: [
        { title: 'System ofertowania dla firmy anodującej', desc: 'Kompleksowe narzędzie wspomagające proces tworzenia ofert w firmie zajmującej się anodowaniem elementów aluminiowych. System obejmuje obsługę zapytań ofertowych, generację ofert PDF, elementy CRM oraz moduł czatu na żywo.' },
        { title: 'System BI i CRM dla dystrybutora', desc: 'Aplikacja integrująca się z systemem ERP, przetwarzająca dane i generująca raporty. Rozszerzona o elementy CRM, dashboard dla przedstawicieli handlowych, moduł ofertowania oraz system powiadomień w czasie rzeczywistym.' },
        { title: 'Platforma ofertowania dla importerów samochodowych', desc: 'System umożliwiający tworzenie wysokiej jakości ofert handlowych w formacie PDF. Powstał w 2 dni od koncepcji do implementacji. Pozwala na definiowanie akcji sprzedażowych, monitorowanie statystyk oraz zarządzanie premiami.' },
        { title: 'System zarządzania flotą wynajmu samochodów', desc: 'Optymalizacja wykorzystania floty poprzez automatyczne układanie planu rezerwacji. Kontrola zdarzeń serwisowych, rozliczanie dosprzedaży lotniskowej oraz integracja z systemami rezerwacji i ERP.' },
      ],
    },
    contact: {
      eyebrow: '//Kontakt',
      title1: 'Porozmawiajmy',
      title2: 'o Twoim projekcie',
      lead: 'Skontaktuj się z nami, aby omówić jak możemy pomóc w cyfryzacji i automatyzacji Twojego biznesu.',
      role: 'Founder',
    },
    footer: {
      copyright: '© 2026 TeamBear Sp. z o.o. Wszelkie prawa zastrzeżone.',
      tagline: 'Cyfryzacja + Automatyzacja',
    },
  },

  en: {
    nav: { uslugi: 'Services', portfolio: 'Portfolio', kontakt: 'Contact', talk: "Let's talk" },
    hero: {
      eyebrow: 'Digitalization + Automation',
      title1: 'We turn processes',
      title2: 'into a competitive advantage',
      lead: 'We build web applications combining BI and CRM elements that handle specific quoting and sales processes. We automate time-consuming processes that were previously done manually.',
      cta1: 'Start a project',
      cta2: 'See services',
      scroll: 'Scroll',
    },
    services: {
      heading1: 'What we',
      heading2: 'do',
      items: [
        { title: 'Web applications', desc: 'We build web applications combining BI and CRM elements that handle specific quoting and sales processes.' },
        { title: 'Consulting', desc: "We advise on how to translate clients' business needs into concrete system functionality." },
        { title: 'Automation', desc: 'We automate time-consuming processes that were previously done manually.' },
        { title: 'Systems integration', desc: 'We integrate with the systems used by our clients, e.g. ERP.' },
      ],
    },
    way: {
      title1: 'TeamBear',
      title2: 'Way',
      lead: 'What sets us apart from other technology companies.',
      items: [
        { title: 'Flexibility', desc: 'Thanks to our organizational structure - a small but committed team - we can deliver products and services quickly and flexibly.' },
        { title: 'Communication', desc: 'Our approach, combining the best of both corporate and non-corporate work cultures, fosters effective communication.' },
        { title: 'Mindset', desc: 'Information reaches directly the people who are directly responsible for carrying out a given task.' },
      ],
    },
    portfolio: {
      heading: 'Portfolio',
      lead: 'Selected projects we have delivered for our clients.',
      category: 'Web application',
      projects: [
        { title: 'Quoting system for an anodizing company', desc: 'A comprehensive tool supporting the quote-creation process at a company anodizing aluminium components. The system covers handling of quote requests, PDF quote generation, CRM elements and a live chat module.' },
        { title: 'BI and CRM system for a distributor', desc: 'An application integrating with an ERP system, processing data and generating reports. Extended with CRM elements, a dashboard for sales representatives, a quoting module and a real-time notification system.' },
        { title: 'Quoting platform for car importers', desc: 'A system enabling the creation of high-quality commercial offers in PDF format. Built in 2 days from concept to implementation. It allows defining sales campaigns, monitoring statistics and managing bonuses.' },
        { title: 'Car rental fleet management system', desc: 'Optimizing fleet utilization through automatic scheduling of the reservation plan. Control of service events, settlement of airport upselling and integration with reservation and ERP systems.' },
      ],
    },
    contact: {
      eyebrow: '//Contact',
      title1: "Let's talk",
      title2: 'about your project',
      lead: 'Get in touch to discuss how we can help digitalize and automate your business.',
      role: 'Founder',
    },
    footer: {
      copyright: '© 2026 TeamBear Sp. z o.o. All rights reserved.',
      tagline: 'Digitalization + Automation',
    },
  },
} as const;

// The locale rendered server-side (and the default before any user choice).
export const defaultLang: Lang = 'pl';
