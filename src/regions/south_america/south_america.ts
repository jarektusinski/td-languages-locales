import Aymara from './languages/aymara';
import Guarani from './languages/guarani';
import Mapudungun from './languages/mapudungun';
import Portuguese from './languages/portuguese';
import Quechua from './languages/quechua';
import Spanish from './languages/spanish';

const AYMARA_LANGUAGES = [...Object.values(Aymara)] as const;
const GUARANI_LANGUAGES = [...Object.values(Guarani)] as const;
const MAPUDUNGUN_LANGUAGES = [...Object.values(Mapudungun)] as const;
const PORTUGUESE_LANGUAGES = [...Object.values(Portuguese)] as const;
const QUECHUA_LANGUAGES = [...Object.values(Quechua)] as const;
const SPANISH_LANGUAGES = [...Object.values(Spanish)] as const;
const SOUTH_AMERICA_LANGUAGES = [
  ...AYMARA_LANGUAGES,
  ...GUARANI_LANGUAGES,
  ...MAPUDUNGUN_LANGUAGES,
  ...PORTUGUESE_LANGUAGES,
  ...QUECHUA_LANGUAGES,
  ...SPANISH_LANGUAGES,
] as const;

type SouthAmericaAymaraLanguage = (typeof AYMARA_LANGUAGES)[number];
type SouthAmericaGuaraniLanguage = (typeof GUARANI_LANGUAGES)[number];
type SouthAmericaMapudungunLanguage = (typeof MAPUDUNGUN_LANGUAGES)[number];
type SouthAmericaPortugueseLanguage = (typeof PORTUGUESE_LANGUAGES)[number];
type SouthAmericaQuechuaLanguage = (typeof QUECHUA_LANGUAGES)[number];
type SouthAmericaSpanishLanguage = (typeof SPANISH_LANGUAGES)[number];
type SouthAmericaLanguage = (typeof SOUTH_AMERICA_LANGUAGES)[number];

export type {
  SouthAmericaAymaraLanguage,
  SouthAmericaGuaraniLanguage,
  SouthAmericaMapudungunLanguage,
  SouthAmericaPortugueseLanguage,
  SouthAmericaQuechuaLanguage,
  SouthAmericaSpanishLanguage,
  SouthAmericaLanguage,
};

export default {
  ...Aymara,
  ...Guarani,
  ...Mapudungun,
  ...Portuguese,
  ...Quechua,
  ...Spanish,
  AYMARA_LANGUAGES,
  GUARANI_LANGUAGES,
  MAPUDUNGUN_LANGUAGES,
  PORTUGUESE_LANGUAGES,
  QUECHUA_LANGUAGES,
  SPANISH_LANGUAGES,
  SOUTH_AMERICA_LANGUAGES,
};
