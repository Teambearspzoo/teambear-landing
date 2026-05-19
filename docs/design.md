# Design system - TeamBear landing

Zasady wizualne i strukturalne obowiązujące w tym repo. Każda nowa strona lub
sekcja musi się do nich stosować, żeby strona była spójna z istniejącymi
komponentami (`Hero`, `Services`, `TeamBearWay`, `Portfolio`, `Contact`,
`Footer`, `portfolio/[slug].astro`).

Nie używaj długich myślników (`-` / `-`). Zawsze zwykły dywiz `-`. Dotyczy
zarówno kodu, jak i copy.

## Fundamenty

- **Stack**: Astro + Tailwind v4 (przez `@tailwindcss/vite` w `astro.config.mjs`,
  bez pliku `tailwind.config`). Brak motywu - kolory wpisujemy literałami.
- **Font**: `Instrument Sans` (Google Fonts, wagi 400/500/600/700), ładowany w
  `Layout.astro`. `font-family:'Instrument Sans', sans-serif` ustawiane też
  inline na głównym kontenerze strony.
- **Język**: całe copy po polsku. System i18n
  (`src/i18n.ts` + przełącznik w `Layout.astro`) obsługuje PL/EN przez atrybuty
  `data-i18n="<dotted.path>"`; strony jednojęzyczne (np. `/picking`) mogą
  renderować copy bezpośrednio bez `data-i18n`.

## Kolory

| Rola | Wartość | Użycie |
|---|---|---|
| Tło bazowe | `#1a1a1a` | `body`, sekcje nieparzyste, kontener strony |
| Tło naprzemienne | `#141414` | co druga sekcja, kontrast między blokami |
| Akcent (brand) | `#FF5A2D` | pomarańcz: CTA, eyebrow, ikony, hover |
| Tekst | `#fff` | nagłówki i treść |

Nie wprowadzaj nowych kolorów. Hierarchię tekstu buduje się **przezroczystością
bieli**, nie nowymi odcieniami:

- `text-white` - mocny nagłówek / wyróżnione słowa
- `text-white/60` - lead / treść akapitów
- `text-white/50` - opisy w kartach
- `text-white/40` - drugi wiersz nagłówka, podpisy
- `text-white/30` - trust strip, zastrzeżenia, drobny tekst
- `text-white/20` - numery porządkowe

Akcent też przez przezroczystość: `bg-[#FF5A2D]/10` (tło ikony),
`/20` (hover ikony / obramowanie), `/5`-`/10` (poświaty), `border-[#FF5A2D]/20`
(hover karty).

## Layout i siatka

- Kontener treści: `max-w-7xl mx-auto px-6 lg:px-12` (węższe warianty
  `max-w-5xl` / `max-w-4xl` / `max-w-3xl` dla tekstu czytanego liniowo i FAQ).
- Sekcja standardowa: `py-32` (`py-24` dla bloków CTA / domykających).
- Sekcje **naprzemiennie** `bg-[#1a1a1a]` i `bg-[#141414]`.
- Każda sekcja, która ma poświatę / siatkę w tle: `relative overflow-hidden`,
  a dekoracje `absolute ... pointer-events-none`.
- Układy dwukolumnowe robimy siatką `grid lg:grid-cols-12` z podziałem
  `lg:col-span-4/8` lub `lg:col-span-5/7`; lewa kolumna opisowa często
  `sticky top-32`.
- `Header` jest `fixed`, więc pierwsza sekcja strony ma górny padding
  (`pt-32`), a elementy `sticky` używają `top-32`.

## Typografia

- **H1 (hero)**: `text-5xl md:text-6xl lg:text-7xl font-bold text-white
  leading-[1.1] tracking-tight`.
- **H2 (sekcja)**: `text-4xl md:text-5xl font-bold text-white leading-tight`.
- **Wzór dwuwierszowego nagłówka**: pierwszy wiersz `text-white`, `<br />`,
  drugi wiersz `text-white/40`.
- **Eyebrow**: `text-[#FF5A2D] text-sm font-medium tracking-[0.2em] uppercase`.
  Numeracja sekcji w stylu `//01`, `//02`, ... (osobna, ciągła per strona).
- **Lead**: `text-lg md:text-xl text-white/60 leading-relaxed`.
- **Treść karty**: `text-white/50 leading-relaxed`.

## Komponenty

### Karta

```
rounded-2xl bg-white/[0.02] border border-white/5
hover:border-[#FF5A2D]/20 hover:bg-white/[0.04]
transition-all duration-500
```

Często `group` + tytuł `group-hover:text-[#FF5A2D] transition-colors
duration-300`. Karty wypełniające równą wysokość: `h-full`.

### Kafelek ikony

`w-10 h-10`/`w-12 h-12`, `rounded-lg`/`rounded-xl`,
`bg-[#FF5A2D]/10 flex items-center justify-center`, na hover
`group-hover:bg-[#FF5A2D]/20`. Numer kroku zamiast ikony:
`<span class="text-[#FF5A2D] font-bold text-lg">01</span>`.

### Ikony

Wyłącznie **inline SVG w stylu lucide** (`stroke="currentColor"`,
`stroke-width="2"`, `stroke-linecap/linejoin="round"`, `viewBox="0 0 24 24"`,
`aria-hidden="true"`), zwykle `w-5 h-5` / `w-6 h-6 text-[#FF5A2D]`.
**Nie używaj emoji** - mapuj je na odpowiedniki SVG.

### Przyciski / CTA

- Primary: `inline-flex items-center justify-center gap-2 px-8 py-4
  bg-[#FF5A2D] text-white font-medium rounded-lg hover:bg-[#FF5A2D]/90
  transition-all duration-300 hover:translate-y-[-2px]`, zwykle z ikoną
  strzałki (`arrow-right`).
- Secondary: `border border-white/20 text-white ... hover:bg-white/5`.
- Na statycznej stronie (brak backendu) primary CTA to prefilled `mailto:`;
  dane kontaktowe powielamy wzorem komponentu `Contact`. Nie dodajemy formularzy
  bez działającego backendu.

### Poświaty (glow)

`absolute ... bg-[#FF5A2D]/5` (lub `/10`) `rounded-full blur-[150px]
pointer-events-none`, rozmiary responsywne `w-[min(600px,100vw)]` itp.
Siatka w tle hero: nakładane `linear-gradient` w `opacity-[0.03]`.

### FAQ / akordeon

Natywne `<details>`/`<summary>` (bez JS), stylizowane jak karta.
Rotacja ikony przez `[&_svg]:open:rotate-45`, `summary` ma `list-none` i
`cursor-pointer`. Preferuj rozwiązania niewymagające JS.

## Animacje

- Każdy element, który ma pojawić się przy scrollu, dostaje klasę **`reveal`**.
  `IntersectionObserver` w `Layout.astro` dodaje `is-visible`
  (`opacity 0→1`, `translateY(30px)→0`, `0.7s ease`).
- `Layout.astro` ustawia `<html class="no-js">`; skrypt w `<head>` ją zdejmuje,
  więc bez JS treść jest od razu widoczna (`.no-js .reveal { opacity: 1 }`).
- Nie przywracaj ujemnego dolnego `rootMargin` w obserwerze - chowa stopkę.
- Przejścia interakcyjne: kolory `duration-300`, karty / hover `duration-500`.

## Struktura strony

- `Layout.astro` dostarcza `<head>` (tytuł, meta description, font, favicon) i
  współdzielone skrypty (scroll-reveal, przełącznik języka, menu mobilne).
  Tytuł/opis przekazuj propsami `title` / `description`.
- Strona = `<Layout>` → `<div class="min-h-screen overflow-x-hidden"
  style="background-color:#1a1a1a;font-family:'Instrument Sans', sans-serif">`
  → `<Header />` → `<main>` (sekcje) → `<Footer />`.
- Strona główna komponuje sekcje z `src/components/*.astro` (jedna sekcja =
  jeden komponent, dane jako tablice we frontmatterze). Podstrony
  (`portfolio/[slug].astro`, `picking.astro`) renderują sekcje inline w jednym
  pliku, ale z tych samych klas i wzorców.
- Zasoby statyczne w `public/`, referencja ścieżką root-absolutną (`/...`).

## SEO

- `title` ≤ 60 znaków, `description` ≤ 160 znaków, przekazywane do `Layout`.
- Słowa kluczowe osadzaj naturalnie w copy, nie upychaj.

## Czego unikać

- Długich myślników (`-` / `-`).
- Emoji w UI.
- Nowych kolorów spoza palety.
- Formularzy bez backendu.
- Buzzwordów w copy ("transformacja cyfrowa", "rewolucja", "AI", "all-in-one").
- Ujemnego dolnego `rootMargin` w scroll-reveal.
