import Afrikaans from './languages/afrikaans';
import Akan from './languages/akan';
import Amharic from './languages/amharic';
import Arabic from './languages/arabic';
import Bambara from './languages/bambara';
import Bemba from './languages/bemba';
import Dholuo from './languages/dholuo';
import Ewe from './languages/ewe';
import Fulani from './languages/fulani';
import Ga from './languages/ga';
import Hausa from './languages/hausa';
import Igbo from './languages/igbo';
import Kabyle from './languages/kabyle';
import Kamba from './languages/kamba';
import Kanuri from './languages/kanuri';
import Kikuyu from './languages/kikuyu';
import Kinyarwanda from './languages/kinyarwanda';
import Kirundi from './languages/kirundi';
import Lingala from './languages/lingala';
import LubaKasai from './languages/luba_kasai';
import Luganda from './languages/luganda';
import Luo from './languages/luo';
import Malagasy from './languages/malagasy';
import Meru from './languages/meru';
import Mossi from './languages/mossi';
import Nyanja from './languages/nyanja';
import Oromo from './languages/oromo';
import Portuguese from './languages/portuguese';
import Sango from './languages/sango';
import Sesotho from './languages/sesotho';
import Shona from './languages/shona';
import Somali from './languages/somali';
import Soninke from './languages/soninke';
import Swahili from './languages/swahili';
import Swati from './languages/swati';
import Tigrinya from './languages/tigrinya';
import Tsonga from './languages/tsonga';
import Tswana from './languages/tswana';
import Tumbuka from './languages/tumbuka';
import Twi from './languages/twi';
import Venda from './languages/venda';
import Wolof from './languages/wolof';
import Xhosa from './languages/xhosa';
import Yoruba from './languages/yoruba';
import Zulu from './languages/zulu';

const AFRIKAANS_LANGUAGES = [...Object.values(Afrikaans)] as const;
const AKAN_LANGUAGES = [...Object.values(Akan)] as const;
const AMHARIC_LANGUAGES = [...Object.values(Amharic)] as const;
const ARABIC_LANGUAGES = [...Object.values(Arabic)] as const;
const BAMBARA_LANGUAGES = [...Object.values(Bambara)] as const;
const BEMBA_LANGUAGES = [...Object.values(Bemba)] as const;
const DHOLUO_LANGUAGES = [...Object.values(Dholuo)] as const;
const EWE_LANGUAGES = [...Object.values(Ewe)] as const;
const FULANI_LANGUAGES = [...Object.values(Fulani)] as const;
const GA_LANGUAGES = [...Object.values(Ga)] as const;
const HAUSA_LANGUAGES = [...Object.values(Hausa)] as const;
const IGBO_LANGUAGES = [...Object.values(Igbo)] as const;
const KABYLE_LANGUAGES = [...Object.values(Kabyle)] as const;
const KAMBA_LANGUAGES = [...Object.values(Kamba)] as const;
const KANURI_LANGUAGES = [...Object.values(Kanuri)] as const;
const KIKUYU_LANGUAGES = [...Object.values(Kikuyu)] as const;
const KINYARWANDA_LANGUAGES = [...Object.values(Kinyarwanda)] as const;
const KIRUNDI_LANGUAGES = [...Object.values(Kirundi)] as const;
const LINGALA_LANGUAGES = [...Object.values(Lingala)] as const;
const LUBAKASAI_LANGUAGES = [...Object.values(LubaKasai)] as const;
const LUGANDA_LANGUAGES = [...Object.values(Luganda)] as const;
const LUO_LANGUAGES = [...Object.values(Luo)] as const;
const MALAGASY_LANGUAGES = [...Object.values(Malagasy)] as const;
const MERU_LANGUAGES = [...Object.values(Meru)] as const;
const MOSSI_LANGUAGES = [...Object.values(Mossi)] as const;
const NYANJA_LANGUAGES = [...Object.values(Nyanja)] as const;
const OROMO_LANGUAGES = [...Object.values(Oromo)] as const;
const PORTUGUESE_LANGUAGES = [...Object.values(Portuguese)] as const;
const SANGO_LANGUAGES = [...Object.values(Sango)] as const;
const SESOTHO_LANGUAGES = [...Object.values(Sesotho)] as const;
const SHONA_LANGUAGES = [...Object.values(Shona)] as const;
const SOMALI_LANGUAGES = [...Object.values(Somali)] as const;
const SONINKE_LANGUAGES = [...Object.values(Soninke)] as const;
const SWAHILI_LANGUAGES = [...Object.values(Swahili)] as const;
const SWATI_LANGUAGES = [...Object.values(Swati)] as const;
const TIGRINYA_LANGUAGES = [...Object.values(Tigrinya)] as const;
const TSONGA_LANGUAGES = [...Object.values(Tsonga)] as const;
const TSWANA_LANGUAGES = [...Object.values(Tswana)] as const;
const TUMBUKA_LANGUAGES = [...Object.values(Tumbuka)] as const;
const TWI_LANGUAGES = [...Object.values(Twi)] as const;
const VENDA_LANGUAGES = [...Object.values(Venda)] as const;
const WOLOF_LANGUAGES = [...Object.values(Wolof)] as const;
const XHOSA_LANGUAGES = [...Object.values(Xhosa)] as const;
const YORUBA_LANGUAGES = [...Object.values(Yoruba)] as const;
const ZULU_LANGUAGES = [...Object.values(Zulu)] as const;
const AFRICA_LANGUAGES = [
    ...AFRIKAANS_LANGUAGES,
    ...AKAN_LANGUAGES,
    ...AMHARIC_LANGUAGES,
    ...ARABIC_LANGUAGES,
    ...BAMBARA_LANGUAGES,
    ...BEMBA_LANGUAGES,
    ...DHOLUO_LANGUAGES,
    ...EWE_LANGUAGES,
    ...FULANI_LANGUAGES,
    ...GA_LANGUAGES,
    ...HAUSA_LANGUAGES,
    ...IGBO_LANGUAGES,
    ...KABYLE_LANGUAGES,
    ...KAMBA_LANGUAGES,
    ...KANURI_LANGUAGES,
    ...KIKUYU_LANGUAGES,
    ...KINYARWANDA_LANGUAGES,
    ...KIRUNDI_LANGUAGES,
    ...LINGALA_LANGUAGES,
    ...LUBAKASAI_LANGUAGES,
    ...LUGANDA_LANGUAGES,
    ...LUO_LANGUAGES,
    ...MALAGASY_LANGUAGES,
    ...MERU_LANGUAGES,
    ...MOSSI_LANGUAGES,
    ...NYANJA_LANGUAGES,
    ...OROMO_LANGUAGES,
    ...PORTUGUESE_LANGUAGES,
    ...SANGO_LANGUAGES,
    ...SESOTHO_LANGUAGES,
    ...SHONA_LANGUAGES,
    ...SOMALI_LANGUAGES,
    ...SONINKE_LANGUAGES,
    ...SWAHILI_LANGUAGES,
    ...SWATI_LANGUAGES,
    ...TIGRINYA_LANGUAGES,
    ...TSONGA_LANGUAGES,
    ...TSWANA_LANGUAGES,
    ...TUMBUKA_LANGUAGES,
    ...TWI_LANGUAGES,
    ...VENDA_LANGUAGES,
    ...WOLOF_LANGUAGES,
    ...XHOSA_LANGUAGES,
    ...YORUBA_LANGUAGES,
    ...ZULU_LANGUAGES
] as const;

type AfricaAfrikaansLanguage = (typeof AFRIKAANS_LANGUAGES)[number];
type AfricaAkanLanguage = (typeof AKAN_LANGUAGES)[number];
type AfricaAmharicLanguage = (typeof AMHARIC_LANGUAGES)[number];
type AfricaArabicLanguage = (typeof ARABIC_LANGUAGES)[number];
type AfricaBambaraLanguage = (typeof BAMBARA_LANGUAGES)[number];
type AfricaBembaLanguage = (typeof BEMBA_LANGUAGES)[number];
type AfricaDholuoLanguage = (typeof DHOLUO_LANGUAGES)[number];
type AfricaEweLanguage = (typeof EWE_LANGUAGES)[number];
type AfricaFulaniLanguage = (typeof FULANI_LANGUAGES)[number];
type AfricaGaLanguage = (typeof GA_LANGUAGES)[number];
type AfricaHausaLanguage = (typeof HAUSA_LANGUAGES)[number];
type AfricaIgboLanguage = (typeof IGBO_LANGUAGES)[number];
type AfricaKabyleLanguage = (typeof KABYLE_LANGUAGES)[number];
type AfricaKambaLanguage = (typeof KAMBA_LANGUAGES)[number];
type AfricaKanuriLanguage = (typeof KANURI_LANGUAGES)[number];
type AfricaKikuyuLanguage = (typeof KIKUYU_LANGUAGES)[number];
type AfricaKinyarwandaLanguage = (typeof KINYARWANDA_LANGUAGES)[number];
type AfricaKirundiLanguage = (typeof KIRUNDI_LANGUAGES)[number];
type AfricaLingalaLanguage = (typeof LINGALA_LANGUAGES)[number];
type AfricaLubaKasaiLanguage = (typeof LUBAKASAI_LANGUAGES)[number];
type AfricaLugandaLanguage = (typeof LUGANDA_LANGUAGES)[number];
type AfricaLuoLanguage = (typeof LUO_LANGUAGES)[number];
type AfricaMalagasyLanguage = (typeof MALAGASY_LANGUAGES)[number];
type AfricaMeruLanguage = (typeof MERU_LANGUAGES)[number];
type AfricaMossiLanguage = (typeof MOSSI_LANGUAGES)[number];
type AfricaNyanjaLanguage = (typeof NYANJA_LANGUAGES)[number];
type AfricaOromoLanguage = (typeof OROMO_LANGUAGES)[number];
type AfricaPortugueseLanguage = (typeof PORTUGUESE_LANGUAGES)[number];
type AfricaSangoLanguage = (typeof SANGO_LANGUAGES)[number];
type AfricaSesothoLanguage = (typeof SESOTHO_LANGUAGES)[number];
type AfricaShonaLanguage = (typeof SHONA_LANGUAGES)[number];
type AfricaSomaliLanguage = (typeof SOMALI_LANGUAGES)[number];
type AfricaSoninkeLanguage = (typeof SONINKE_LANGUAGES)[number];
type AfricaSwahiliLanguage = (typeof SWAHILI_LANGUAGES)[number];
type AfricaSwatiLanguage = (typeof SWATI_LANGUAGES)[number];
type AfricaTigrinyaLanguage = (typeof TIGRINYA_LANGUAGES)[number];
type AfricaTsongaLanguage = (typeof TSONGA_LANGUAGES)[number];
type AfricaTswanaLanguage = (typeof TSWANA_LANGUAGES)[number];
type AfricaTumbukaLanguage = (typeof TUMBUKA_LANGUAGES)[number];
type AfricaTwiLanguage = (typeof TWI_LANGUAGES)[number];
type AfricaVendaLanguage = (typeof VENDA_LANGUAGES)[number];
type AfricaWolofLanguage = (typeof WOLOF_LANGUAGES)[number];
type AfricaXhosaLanguage = (typeof XHOSA_LANGUAGES)[number];
type AfricaYorubaLanguage = (typeof YORUBA_LANGUAGES)[number];
type AfricaZuluLanguage = (typeof ZULU_LANGUAGES)[number];
type AfricaLanguage = (typeof AFRICA_LANGUAGES)[number];

export type {
  AfricaAfrikaansLanguage,
  AfricaAkanLanguage,
  AfricaAmharicLanguage,
  AfricaArabicLanguage,
  AfricaBambaraLanguage,
  AfricaBembaLanguage,
  AfricaDholuoLanguage,
  AfricaEweLanguage,
  AfricaFulaniLanguage,
  AfricaGaLanguage,
  AfricaHausaLanguage,
  AfricaIgboLanguage,
  AfricaKabyleLanguage,
  AfricaKambaLanguage,
  AfricaKanuriLanguage,
  AfricaKikuyuLanguage,
  AfricaKinyarwandaLanguage,
  AfricaKirundiLanguage,
  AfricaLingalaLanguage,
  AfricaLubaKasaiLanguage,
  AfricaLugandaLanguage,
  AfricaLuoLanguage,
  AfricaMalagasyLanguage,
  AfricaMeruLanguage,
  AfricaMossiLanguage,
  AfricaNyanjaLanguage,
  AfricaOromoLanguage,
  AfricaPortugueseLanguage,
  AfricaSangoLanguage,
  AfricaSesothoLanguage,
  AfricaShonaLanguage,
  AfricaSomaliLanguage,
  AfricaSoninkeLanguage,
  AfricaSwahiliLanguage,
  AfricaSwatiLanguage,
  AfricaTigrinyaLanguage,
  AfricaTsongaLanguage,
  AfricaTswanaLanguage,
  AfricaTumbukaLanguage,
  AfricaTwiLanguage,
  AfricaVendaLanguage,
  AfricaWolofLanguage,
  AfricaXhosaLanguage,
  AfricaYorubaLanguage,
  AfricaZuluLanguage,
  AfricaLanguage,
};

export default {
  ...Afrikaans,
  ...Akan,
  ...Amharic,
  ...Arabic,
  ...Bambara,
  ...Bemba,
  ...Dholuo,
  ...Ewe,
  ...Fulani,
  ...Ga,
  ...Hausa,
  ...Igbo,
  ...Kabyle,
  ...Kamba,
  ...Kanuri,
  ...Kikuyu,
  ...Kinyarwanda,
  ...Kirundi,
  ...Lingala,
  ...LubaKasai,
  ...Luganda,
  ...Luo,
  ...Malagasy,
  ...Meru,
  ...Mossi,
  ...Nyanja,
  ...Oromo,
  ...Portuguese,
  ...Sango,
  ...Sesotho,
  ...Shona,
  ...Somali,
  ...Soninke,
  ...Swahili,
  ...Swati,
  ...Tigrinya,
  ...Tsonga,
  ...Tswana,
  ...Tumbuka,
  ...Twi,
  ...Venda,
  ...Wolof,
  ...Xhosa,
  ...Yoruba,
  ...Zulu,
  AFRIKAANS_LANGUAGES,
  AKAN_LANGUAGES,
  AMHARIC_LANGUAGES,
  ARABIC_LANGUAGES,
  BAMBARA_LANGUAGES,
  BEMBA_LANGUAGES,
  DHOLUO_LANGUAGES,
  EWE_LANGUAGES,
  FULANI_LANGUAGES,
  GA_LANGUAGES,
  HAUSA_LANGUAGES,
  IGBO_LANGUAGES,
  KABYLE_LANGUAGES,
  KAMBA_LANGUAGES,
  KANURI_LANGUAGES,
  KIKUYU_LANGUAGES,
  KINYARWANDA_LANGUAGES,
  KIRUNDI_LANGUAGES,
  LINGALA_LANGUAGES,
  LUBAKASAI_LANGUAGES,
  LUGANDA_LANGUAGES,
  LUO_LANGUAGES,
  MALAGASY_LANGUAGES,
  MERU_LANGUAGES,
  MOSSI_LANGUAGES,
  NYANJA_LANGUAGES,
  OROMO_LANGUAGES,
  PORTUGUESE_LANGUAGES,
  SANGO_LANGUAGES,
  SESOTHO_LANGUAGES,
  SHONA_LANGUAGES,
  SOMALI_LANGUAGES,
  SONINKE_LANGUAGES,
  SWAHILI_LANGUAGES,
  SWATI_LANGUAGES,
  TIGRINYA_LANGUAGES,
  TSONGA_LANGUAGES,
  TSWANA_LANGUAGES,
  TUMBUKA_LANGUAGES,
  TWI_LANGUAGES,
  VENDA_LANGUAGES,
  WOLOF_LANGUAGES,
  XHOSA_LANGUAGES,
  YORUBA_LANGUAGES,
  ZULU_LANGUAGES,
  AFRICA_LANGUAGES,
};