import ArabicAfrica from './regions/africa/languages/arabic';
import ArabicMiddleEast from './regions/middle_east/languages/arabic';
import PortugueseAfrica from './regions/africa/languages/portuguese';
import PortugueseEurope from './regions/europe/languages/portuguese';
import PortugueseSouthAmerica from './regions/south_america/languages/portuguese';
import EnglishEurope from './regions/europe/languages/english';
import EnglishNorthAmerica from './regions/north_america/languages/english';
import EnglishOceania from './regions/oceania/languages/english';
import FrenchEurope from './regions/europe/languages/french';
import FrenchNorthAmerica from './regions/north_america/languages/french';
import SpanishEurope from './regions/europe/languages/spanish';
import SpanishNorthAmerica from './regions/north_america/languages/spanish';
import SpanishSouthAmerica from './regions/south_america/languages/spanish';

/** @internal */
const ALL_ARABIC_LANGUAGES = [
  ...Object.values(ArabicAfrica),
  ...Object.values(ArabicMiddleEast),
].sort();
const ARABIC_LANGUAGES = ALL_ARABIC_LANGUAGES as ReadonlyArray<
  (typeof ALL_ARABIC_LANGUAGES)[number]
>;
type ArabicLanguage = (typeof ARABIC_LANGUAGES)[number];

const ALL_PORTUGUESE_LANGUAGES = [
  ...Object.values(PortugueseAfrica),
  ...Object.values(PortugueseEurope),
  ...Object.values(PortugueseSouthAmerica),
].sort();
const PORTUGUESE_LANGUAGES = ALL_PORTUGUESE_LANGUAGES as ReadonlyArray<
  (typeof ALL_PORTUGUESE_LANGUAGES)[number]
>;
type PortugueseLanguage = (typeof PORTUGUESE_LANGUAGES)[number];

const ALL_ENGLISH_LANGUAGES = [
  ...Object.values(EnglishEurope),
  ...Object.values(EnglishNorthAmerica),
  ...Object.values(EnglishOceania),
].sort();
const ENGLISH_LANGUAGES = ALL_ENGLISH_LANGUAGES as ReadonlyArray<
  (typeof ALL_ENGLISH_LANGUAGES)[number]
>;
type EnglishLanguage = (typeof ENGLISH_LANGUAGES)[number];

const ALL_FRENCH_LANGUAGES = [
  ...Object.values(FrenchEurope),
  ...Object.values(FrenchNorthAmerica),
].sort();
const FRENCH_LANGUAGES = ALL_FRENCH_LANGUAGES as ReadonlyArray<
  (typeof ALL_FRENCH_LANGUAGES)[number]
>;
type FrenchLanguage = (typeof FRENCH_LANGUAGES)[number];

const ALL_SPANISH_LANGUAGES = [
  ...Object.values(SpanishEurope),
  ...Object.values(SpanishNorthAmerica),
  ...Object.values(SpanishSouthAmerica),
].sort();
const SPANISH_LANGUAGES = ALL_SPANISH_LANGUAGES as ReadonlyArray<
  (typeof ALL_SPANISH_LANGUAGES)[number]
>;
type SpanishLanguage = (typeof SPANISH_LANGUAGES)[number];

export type {
  ArabicLanguage,
  PortugueseLanguage,
  EnglishLanguage,
  FrenchLanguage,
  SpanishLanguage,
};

export default {
  ARABIC_LANGUAGES,
  PORTUGUESE_LANGUAGES,
  ENGLISH_LANGUAGES,
  FRENCH_LANGUAGES,
  SPANISH_LANGUAGES,
};
