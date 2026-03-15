import English from './languages/english';
import Fijian from './languages/fijian';
import Maori from './languages/maori';
import Samoan from './languages/samoan';
import Tahitian from './languages/tahitian';
import Tongan from './languages/tongan';
import Tuvalu from './languages/tuvalu';

/** @type OceanianEnglishLanguage[] */
const ENGLISH_LANGUAGES = [...Object.values(English)] as const;
const FIJIAN_LANGUAGES = [...Object.values(Fijian)] as const;
const MAORI_LANGUAGES = [...Object.values(Maori)] as const;
const SAMOAN_LANGUAGES = [...Object.values(Samoan)] as const;
const TAHITIAN_LANGUAGES = [...Object.values(Tahitian)] as const;
const TONGAN_LANGUAGES = [...Object.values(Tongan)] as const;
const TUVALU_LANGUAGES = [...Object.values(Tuvalu)] as const;
const OCEANIA_LANGUAGES = [
  ...ENGLISH_LANGUAGES,
  ...FIJIAN_LANGUAGES,
  ...MAORI_LANGUAGES,
  ...SAMOAN_LANGUAGES,
  ...TAHITIAN_LANGUAGES,
  ...TONGAN_LANGUAGES,
  ...TUVALU_LANGUAGES,
] as const;

type OceanianEnglishLanguage = (typeof ENGLISH_LANGUAGES)[number];
type OceanianFijianLanguage = (typeof FIJIAN_LANGUAGES)[number];
type OceanianMaoriLanguage = (typeof MAORI_LANGUAGES)[number];
type OceanianSamoanLanguage = (typeof SAMOAN_LANGUAGES)[number];
type OceanianTahitianLanguage = (typeof TAHITIAN_LANGUAGES)[number];
type OceanianTonganLanguage = (typeof TONGAN_LANGUAGES)[number];
type OceanianTuvaluLanguage = (typeof TUVALU_LANGUAGES)[number];
type OceanianLanguage = (typeof OCEANIA_LANGUAGES)[number];

export type {
  OceanianEnglishLanguage,
  OceanianFijianLanguage,
  OceanianMaoriLanguage,
  OceanianSamoanLanguage,
  OceanianTahitianLanguage,
  OceanianTonganLanguage,
  OceanianTuvaluLanguage,
  OceanianLanguage,
};

export default {
  ...English,
  ...Fijian,
  ...Maori,
  ...Samoan,
  ...Tahitian,
  ...Tongan,
  ...Tuvalu,
  ENGLISH_LANGUAGES,
  FIJIAN_LANGUAGES,
  MAORI_LANGUAGES,
  SAMOAN_LANGUAGES,
  TAHITIAN_LANGUAGES,
  TONGAN_LANGUAGES,
  TUVALU_LANGUAGES,
  OCEANIA_LANGUAGES,
};
