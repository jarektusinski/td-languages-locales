import Cree from './languages/cree';
import English from './languages/english';
import French from './languages/french';
import HaitianCreole from './languages/haitian_creole';
import Hawaiian from './languages/hawaiian';
import Inuktitut from './languages/inuktitut';
import Maya from './languages/maya';
import Mixtec from './languages/mixtec';
import Nahuatl from './languages/nahuatl';
import Navajo from './languages/navajo';
import Ojibwe from './languages/ojibwe';
import Spanish from './languages/spanish';
import YucatecMaya from './languages/yucatec_maya';
import Zapotec from './languages/zapotec';

const CREE_LANGUAGES = [...Object.values(Cree)] as const;
const ENGLISH_LANGUAGES = [...Object.values(English)] as const;
const FRENCH_LANGUAGES = [...Object.values(French)] as const;
const HAITIANCREOLE_LANGUAGES = [...Object.values(HaitianCreole)] as const;
const HAWAIIAN_LANGUAGES = [...Object.values(Hawaiian)] as const;
const INUKTITUT_LANGUAGES = [...Object.values(Inuktitut)] as const;
const MAYA_LANGUAGES = [...Object.values(Maya)] as const;
const MIXTEC_LANGUAGES = [...Object.values(Mixtec)] as const;
const NAHUATL_LANGUAGES = [...Object.values(Nahuatl)] as const;
const NAVAJO_LANGUAGES = [...Object.values(Navajo)] as const;
const OJIBWE_LANGUAGES = [...Object.values(Ojibwe)] as const;
const SPANISH_LANGUAGES = [...Object.values(Spanish)] as const;
const YUCATECMAYA_LANGUAGES = [...Object.values(YucatecMaya)] as const;
const ZAPOTEC_LANGUAGES = [...Object.values(Zapotec)] as const;
const NORTH_AMERICA_LANGUAGES = [
  ...CREE_LANGUAGES,
  ...ENGLISH_LANGUAGES,
  ...FRENCH_LANGUAGES,
  ...HAITIANCREOLE_LANGUAGES,
  ...HAWAIIAN_LANGUAGES,
  ...INUKTITUT_LANGUAGES,
  ...MAYA_LANGUAGES,
  ...MIXTEC_LANGUAGES,
  ...NAHUATL_LANGUAGES,
  ...NAVAJO_LANGUAGES,
  ...OJIBWE_LANGUAGES,
  ...SPANISH_LANGUAGES,
  ...YUCATECMAYA_LANGUAGES,
  ...ZAPOTEC_LANGUAGES,
] as const;

type NorthAmericaCreeLanguage = (typeof CREE_LANGUAGES)[number];
type NorthAmericaEnglishLanguage = (typeof ENGLISH_LANGUAGES)[number];
type NorthAmericaFrenchLanguage = (typeof FRENCH_LANGUAGES)[number];
type NorthAmericaHaitianCreoleLanguage = (typeof HAITIANCREOLE_LANGUAGES)[number];
type NorthAmericaHawaiianLanguage = (typeof HAWAIIAN_LANGUAGES)[number];
type NorthAmericaInuktitutLanguage = (typeof INUKTITUT_LANGUAGES)[number];
type NorthAmericaMayaLanguage = (typeof MAYA_LANGUAGES)[number];
type NorthAmericaMixtecLanguage = (typeof MIXTEC_LANGUAGES)[number];
type NorthAmericaNahuatlLanguage = (typeof NAHUATL_LANGUAGES)[number];
type NorthAmericaNavajoLanguage = (typeof NAVAJO_LANGUAGES)[number];
type NorthAmericaOjibweLanguage = (typeof OJIBWE_LANGUAGES)[number];
type NorthAmericaSpanishLanguage = (typeof SPANISH_LANGUAGES)[number];
type NorthAmericaYucatecMayaLanguage = (typeof YUCATECMAYA_LANGUAGES)[number];
type NorthAmericaZapotecLanguage = (typeof ZAPOTEC_LANGUAGES)[number];
type NorthAmericaLanguage = (typeof NORTH_AMERICA_LANGUAGES)[number];

export type {
  NorthAmericaCreeLanguage,
  NorthAmericaEnglishLanguage,
  NorthAmericaFrenchLanguage,
  NorthAmericaHaitianCreoleLanguage,
  NorthAmericaHawaiianLanguage,
  NorthAmericaInuktitutLanguage,
  NorthAmericaMayaLanguage,
  NorthAmericaMixtecLanguage,
  NorthAmericaNahuatlLanguage,
  NorthAmericaNavajoLanguage,
  NorthAmericaOjibweLanguage,
  NorthAmericaSpanishLanguage,
  NorthAmericaYucatecMayaLanguage,
  NorthAmericaZapotecLanguage,
  NorthAmericaLanguage,
};

export default {
  ...Cree,
  ...English,
  ...French,
  ...HaitianCreole,
  ...Hawaiian,
  ...Inuktitut,
  ...Maya,
  ...Mixtec,
  ...Nahuatl,
  ...Navajo,
  ...Ojibwe,
  ...Spanish,
  ...YucatecMaya,
  ...Zapotec,
  CREE_LANGUAGES,
  ENGLISH_LANGUAGES,
  FRENCH_LANGUAGES,
  HAITIANCREOLE_LANGUAGES,
  HAWAIIAN_LANGUAGES,
  INUKTITUT_LANGUAGES,
  MAYA_LANGUAGES,
  MIXTEC_LANGUAGES,
  NAHUATL_LANGUAGES,
  NAVAJO_LANGUAGES,
  OJIBWE_LANGUAGES,
  SPANISH_LANGUAGES,
  YUCATECMAYA_LANGUAGES,
  ZAPOTEC_LANGUAGES,
  NORTH_AMERICA_LANGUAGES,
};
