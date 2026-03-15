import Arabic from './languages/arabic';
import Dari from './languages/dari';
import Hebrew from './languages/hebrew';
import Kurdish from './languages/kurdish';
import Pashto from './languages/pashto';
import Persian from './languages/persian';
import Turkish from './languages/turkish';

const ARABIC_LANGUAGES = [...Object.values(Arabic)] as const;
const DARI_LANGUAGES = [...Object.values(Dari)] as const;
const HEBREW_LANGUAGES = [...Object.values(Hebrew)] as const;
const KURDISH_LANGUAGES = [...Object.values(Kurdish)] as const;
const PASHTO_LANGUAGES = [...Object.values(Pashto)] as const;
const PERSIAN_LANGUAGES = [...Object.values(Persian)] as const;
const TURKISH_LANGUAGES = [...Object.values(Turkish)] as const;
const MIDDLE_EAST_LANGUAGES = [
  ...ARABIC_LANGUAGES,
  ...DARI_LANGUAGES,
  ...HEBREW_LANGUAGES,
  ...KURDISH_LANGUAGES,
  ...PASHTO_LANGUAGES,
  ...PERSIAN_LANGUAGES,
  ...TURKISH_LANGUAGES,
] as const;

type MiddleEastArabicLanguage = (typeof ARABIC_LANGUAGES)[number];
type MiddleEastDariLanguage = (typeof DARI_LANGUAGES)[number];
type MiddleEastHebrewLanguage = (typeof HEBREW_LANGUAGES)[number];
type MiddleEastKurdishLanguage = (typeof KURDISH_LANGUAGES)[number];
type MiddleEastPashtoLanguage = (typeof PASHTO_LANGUAGES)[number];
type MiddleEastPersianLanguage = (typeof PERSIAN_LANGUAGES)[number];
type MiddleEastTurkishLanguage = (typeof TURKISH_LANGUAGES)[number];
type MiddleEastLanguage = (typeof MIDDLE_EAST_LANGUAGES)[number];

export type {
  MiddleEastArabicLanguage,
  MiddleEastDariLanguage,
  MiddleEastHebrewLanguage,
  MiddleEastKurdishLanguage,
  MiddleEastPashtoLanguage,
  MiddleEastPersianLanguage,
  MiddleEastTurkishLanguage,
  MiddleEastLanguage,
};

export default {
  ...Arabic,
  ...Dari,
  ...Hebrew,
  ...Kurdish,
  ...Pashto,
  ...Persian,
  ...Turkish,
  ARABIC_LANGUAGES,
  DARI_LANGUAGES,
  HEBREW_LANGUAGES,
  KURDISH_LANGUAGES,
  PASHTO_LANGUAGES,
  PERSIAN_LANGUAGES,
  TURKISH_LANGUAGES,
  MIDDLE_EAST_LANGUAGES,
};
