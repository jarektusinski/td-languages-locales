# [TusinskiDev] Languages Locales

A TypeScript library that provides region-organized constant locale mappings and type-safe exports for internationalized language support.

## ✅ Features

- **Region-based language sets** (Africa, Asia, Europe, Middle East, North America, Oceania, South America)
- **Type-safe locale constants** (e.g., `ENGLISH_LANGUAGES`, `PORTUGUESE_LANGUAGES`)
- **Aggregated exports** for shared languages across regions (e.g., English, Arabic, Spanish)
- Built for **easy import** and **auto-completion** in TypeScript projects

## 🚀 Usage

### Basic Import

```ts
import Locales, { RegionalLanguage } from 'td-languages-locales';

// Example: list all English locales
const allEnglishLocales = Locales.ENGLISH_LANGUAGES;

// Example: type-safe variable
const locale: RegionalLanguage = Locales.ENGLISH_LANGUAGES[0];
```

### Regional Language Access

```ts
import { AfricaRegionals, AsiaRegionals } from 'td-languages-locales';

// Access African languages
const africanLanguages = AfricaRegionals.AFRICA_LANGUAGES;
const swahiliLocales = AfricaRegionals.Swahili;

// Access Asian languages
const asianLanguages = AsiaRegionals.ASIA_LANGUAGES;
const mandarinLocales = AsiaRegionals.Mandarin;
```

### Type-Safe Language Types

```ts
import type { ArabicLanguage, EnglishLanguage, SpanishLanguage } from 'td-languages-locales';

// These will be type-safe
const arabic: ArabicLanguage = 'ar-SA'; // ✅ Valid
const english: EnglishLanguage = 'en-US'; // ✅ Valid
const spanish: SpanishLanguage = 'es-ES'; // ✅ Valid

// This would cause a TypeScript error:
// const invalid: EnglishLanguage = 'fr-FR'; // ❌ Type error
```


## 🧱 Directory structure

- `src/regions/<region>/languages/*` — individual language locale files
- `src/regions/<region>/<region>.ts` — aggregated exports for each region
- `src/regionals.ts` — shared language exports used by multiple regions

## 🛠️ Build

```bash
npm run build
```

## 🧪 Test

```bash
npm test
```
