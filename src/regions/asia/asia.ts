import Acehnese from './languages/acehnese';
import Assamese from './languages/assamese';
import Awadhi from './languages/awadhi';
import Balinese from './languages/balinese';
import Banjar from './languages/banjar';
import Bashkir from './languages/bashkir';
import Batak from './languages/batak';
import Bengali from './languages/bengali';
import Bhojpuri from './languages/bhojpuri';
import Bikol from './languages/bikol';
import Buginese from './languages/buginese';
import Burmese from './languages/burmese';
import Cantonese from './languages/cantonese';
import Cebuano from './languages/cebuano';
import Chhattisgarhi from './languages/chhattisgarhi';
import Chinese from './languages/chinese';
import Chittagonian from './languages/chittagonian';
import Chuvash from './languages/chuvash';
import Dzongkha from './languages/dzongkha';
import Filipino from './languages/filipino';
import Gan from './languages/gan';
import Garhwali from './languages/garhwali';
import Gondi from './languages/gondi';
import Gujarati from './languages/gujarati';
import Hakka from './languages/hakka';
import Haryanvi from './languages/haryanvi';
import Hiligaynon from './languages/hiligaynon';
import Hindi from './languages/hindi';
import Hmong from './languages/hmong';
import Ilocano from './languages/ilocano';
import Indonesian from './languages/indonesian';
import Japanese from './languages/japanese';
import Javanese from './languages/javanese';
import Kannada from './languages/kannada';
import Kapampangan from './languages/kapampangan';
import Karen from './languages/karen';
import Kashmiri from './languages/kashmiri';
import Kazakh from './languages/kazakh';
import Khmer from './languages/khmer';
import Komi from './languages/komi';
import Konkani from './languages/konkani';
import Korean from './languages/korean';
import Kyrgyz from './languages/kyrgyz';
import Lao from './languages/lao';
import Madurese from './languages/madurese';
import Maithili from './languages/maithili';
import Makassar from './languages/makassar';
import Malay from './languages/malay';
import Malayalam from './languages/malayalam';
import Mandarin from './languages/mandarin';
import Manipuri from './languages/manipuri';
import Maranao from './languages/maranao';
import Marathi from './languages/marathi';
import Marwari from './languages/marwari';
import Meitei from './languages/meitei';
import MinNan from './languages/min_nan';
import Minangkabau from './languages/minangkabau';
import Mon from './languages/mon';
import Mongolian from './languages/mongolian';
import Nepali from './languages/nepali';
import Newar from './languages/newar';
import Odia from './languages/odia';
import Pangasinan from './languages/pangasinan';
import Punjabi from './languages/punjabi';
import Rajasthani from './languages/rajasthani';
import Rohingya from './languages/rohingya';
import Sanskrit from './languages/sanskrit';
import Santali from './languages/santali';
import Shan from './languages/shan';
import Sindhi from './languages/sindhi';
import Sinhala from './languages/sinhala';
import Sundanese from './languages/sundanese';
import Sylheti from './languages/sylheti';
import Tagalog from './languages/tagalog';
import Tajik from './languages/tajik';
import Tamil from './languages/tamil';
import Tatar from './languages/tatar';
import Telugu from './languages/telugu';
import Tetum from './languages/tetum';
import Thai from './languages/thai';
import Tibetan from './languages/tibetan';
import Turkmen from './languages/turkmen';
import Udmurt from './languages/udmurt';
import Urdu from './languages/urdu';
import Uyghur from './languages/uyghur';
import Uzbek from './languages/uzbek';
import Vietnamese from './languages/vietnamese';
import Waray from './languages/waray';
import Wu from './languages/wu';
import Xiang from './languages/xiang';
import Yakut from './languages/yakut';

const ACEHNESE_LANGUAGES = [...Object.values(Acehnese)] as const;
const ASSAMESE_LANGUAGES = [...Object.values(Assamese)] as const;
const AWADHI_LANGUAGES = [...Object.values(Awadhi)] as const;
const BALINESE_LANGUAGES = [...Object.values(Balinese)] as const;
const BANJAR_LANGUAGES = [...Object.values(Banjar)] as const;
const BASHKIR_LANGUAGES = [...Object.values(Bashkir)] as const;
const BATAK_LANGUAGES = [...Object.values(Batak)] as const;
const BENGALI_LANGUAGES = [...Object.values(Bengali)] as const;
const BHOJPURI_LANGUAGES = [...Object.values(Bhojpuri)] as const;
const BIKOL_LANGUAGES = [...Object.values(Bikol)] as const;
const BUGINESE_LANGUAGES = [...Object.values(Buginese)] as const;
const BURMESE_LANGUAGES = [...Object.values(Burmese)] as const;
const CANTONESE_LANGUAGES = [...Object.values(Cantonese)] as const;
const CEBUANO_LANGUAGES = [...Object.values(Cebuano)] as const;
const CHHATTISGARHI_LANGUAGES = [...Object.values(Chhattisgarhi)] as const;
const CHINESE_LANGUAGES = [...Object.values(Chinese)] as const;
const CHITTAGONIAN_LANGUAGES = [...Object.values(Chittagonian)] as const;
const CHUVASH_LANGUAGES = [...Object.values(Chuvash)] as const;
const DZONGKHA_LANGUAGES = [...Object.values(Dzongkha)] as const;
const FILIPINO_LANGUAGES = [...Object.values(Filipino)] as const;
const GAN_LANGUAGES = [...Object.values(Gan)] as const;
const GARHWALI_LANGUAGES = [...Object.values(Garhwali)] as const;
const GONDI_LANGUAGES = [...Object.values(Gondi)] as const;
const GUJARATI_LANGUAGES = [...Object.values(Gujarati)] as const;
const HAKKA_LANGUAGES = [...Object.values(Hakka)] as const;
const HARYANVI_LANGUAGES = [...Object.values(Haryanvi)] as const;
const HILIGAYNON_LANGUAGES = [...Object.values(Hiligaynon)] as const;
const HINDI_LANGUAGES = [...Object.values(Hindi)] as const;
const HMONG_LANGUAGES = [...Object.values(Hmong)] as const;
const ILOCANO_LANGUAGES = [...Object.values(Ilocano)] as const;
const INDONESIAN_LANGUAGES = [...Object.values(Indonesian)] as const;
const JAPANESE_LANGUAGES = [...Object.values(Japanese)] as const;
const JAVANESE_LANGUAGES = [...Object.values(Javanese)] as const;
const KANNADA_LANGUAGES = [...Object.values(Kannada)] as const;
const KAPAMPANGAN_LANGUAGES = [...Object.values(Kapampangan)] as const;
const KAREN_LANGUAGES = [...Object.values(Karen)] as const;
const KASHMIRI_LANGUAGES = [...Object.values(Kashmiri)] as const;
const KAZAKH_LANGUAGES = [...Object.values(Kazakh)] as const;
const KHMER_LANGUAGES = [...Object.values(Khmer)] as const;
const KOMI_LANGUAGES = [...Object.values(Komi)] as const;
const KONKANI_LANGUAGES = [...Object.values(Konkani)] as const;
const KOREAN_LANGUAGES = [...Object.values(Korean)] as const;
const KYRGYZ_LANGUAGES = [...Object.values(Kyrgyz)] as const;
const LAO_LANGUAGES = [...Object.values(Lao)] as const;
const MADURESE_LANGUAGES = [...Object.values(Madurese)] as const;
const MAITHILI_LANGUAGES = [...Object.values(Maithili)] as const;
const MAKASSAR_LANGUAGES = [...Object.values(Makassar)] as const;
const MALAY_LANGUAGES = [...Object.values(Malay)] as const;
const MALAYALAM_LANGUAGES = [...Object.values(Malayalam)] as const;
const MANDARIN_LANGUAGES = [...Object.values(Mandarin)] as const;
const MANIPURI_LANGUAGES = [...Object.values(Manipuri)] as const;
const MARANAO_LANGUAGES = [...Object.values(Maranao)] as const;
const MARATHI_LANGUAGES = [...Object.values(Marathi)] as const;
const MARWARI_LANGUAGES = [...Object.values(Marwari)] as const;
const MEITEI_LANGUAGES = [...Object.values(Meitei)] as const;
const MINNAN_LANGUAGES = [...Object.values(MinNan)] as const;
const MINANGKABAU_LANGUAGES = [...Object.values(Minangkabau)] as const;
const MON_LANGUAGES = [...Object.values(Mon)] as const;
const MONGOLIAN_LANGUAGES = [...Object.values(Mongolian)] as const;
const NEPALI_LANGUAGES = [...Object.values(Nepali)] as const;
const NEWAR_LANGUAGES = [...Object.values(Newar)] as const;
const ODIA_LANGUAGES = [...Object.values(Odia)] as const;
const PANGASINAN_LANGUAGES = [...Object.values(Pangasinan)] as const;
const PUNJABI_LANGUAGES = [...Object.values(Punjabi)] as const;
const RAJASTHANI_LANGUAGES = [...Object.values(Rajasthani)] as const;
const ROHINGYA_LANGUAGES = [...Object.values(Rohingya)] as const;
const SANSKRIT_LANGUAGES = [...Object.values(Sanskrit)] as const;
const SANTALI_LANGUAGES = [...Object.values(Santali)] as const;
const SHAN_LANGUAGES = [...Object.values(Shan)] as const;
const SINDHI_LANGUAGES = [...Object.values(Sindhi)] as const;
const SINHALA_LANGUAGES = [...Object.values(Sinhala)] as const;
const SUNDANESE_LANGUAGES = [...Object.values(Sundanese)] as const;
const SYLHETI_LANGUAGES = [...Object.values(Sylheti)] as const;
const TAGALOG_LANGUAGES = [...Object.values(Tagalog)] as const;
const TAJIK_LANGUAGES = [...Object.values(Tajik)] as const;
const TAMIL_LANGUAGES = [...Object.values(Tamil)] as const;
const TATAR_LANGUAGES = [...Object.values(Tatar)] as const;
const TELUGU_LANGUAGES = [...Object.values(Telugu)] as const;
const TETUM_LANGUAGES = [...Object.values(Tetum)] as const;
const THAI_LANGUAGES = [...Object.values(Thai)] as const;
const TIBETAN_LANGUAGES = [...Object.values(Tibetan)] as const;
const TURKMEN_LANGUAGES = [...Object.values(Turkmen)] as const;
const UDMURT_LANGUAGES = [...Object.values(Udmurt)] as const;
const URDU_LANGUAGES = [...Object.values(Urdu)] as const;
const UYGHUR_LANGUAGES = [...Object.values(Uyghur)] as const;
const UZBEK_LANGUAGES = [...Object.values(Uzbek)] as const;
const VIETNAMESE_LANGUAGES = [...Object.values(Vietnamese)] as const;
const WARAY_LANGUAGES = [...Object.values(Waray)] as const;
const WU_LANGUAGES = [...Object.values(Wu)] as const;
const XIANG_LANGUAGES = [...Object.values(Xiang)] as const;
const YAKUT_LANGUAGES = [...Object.values(Yakut)] as const;
const ASIA_LANGUAGES = [
  ...ACEHNESE_LANGUAGES,
  ...ASSAMESE_LANGUAGES,
  ...AWADHI_LANGUAGES,
  ...BALINESE_LANGUAGES,
  ...BANJAR_LANGUAGES,
  ...BASHKIR_LANGUAGES,
  ...BATAK_LANGUAGES,
  ...BENGALI_LANGUAGES,
  ...BHOJPURI_LANGUAGES,
  ...BIKOL_LANGUAGES,
  ...BUGINESE_LANGUAGES,
  ...BURMESE_LANGUAGES,
  ...CANTONESE_LANGUAGES,
  ...CEBUANO_LANGUAGES,
  ...CHHATTISGARHI_LANGUAGES,
  ...CHINESE_LANGUAGES,
  ...CHITTAGONIAN_LANGUAGES,
  ...CHUVASH_LANGUAGES,
  ...DZONGKHA_LANGUAGES,
  ...FILIPINO_LANGUAGES,
  ...GAN_LANGUAGES,
  ...GARHWALI_LANGUAGES,
  ...GONDI_LANGUAGES,
  ...GUJARATI_LANGUAGES,
  ...HAKKA_LANGUAGES,
  ...HARYANVI_LANGUAGES,
  ...HILIGAYNON_LANGUAGES,
  ...HINDI_LANGUAGES,
  ...HMONG_LANGUAGES,
  ...ILOCANO_LANGUAGES,
  ...INDONESIAN_LANGUAGES,
  ...JAPANESE_LANGUAGES,
  ...JAVANESE_LANGUAGES,
  ...KANNADA_LANGUAGES,
  ...KAPAMPANGAN_LANGUAGES,
  ...KAREN_LANGUAGES,
  ...KASHMIRI_LANGUAGES,
  ...KAZAKH_LANGUAGES,
  ...KHMER_LANGUAGES,
  ...KOMI_LANGUAGES,
  ...KONKANI_LANGUAGES,
  ...KOREAN_LANGUAGES,
  ...KYRGYZ_LANGUAGES,
  ...LAO_LANGUAGES,
  ...MADURESE_LANGUAGES,
  ...MAITHILI_LANGUAGES,
  ...MAKASSAR_LANGUAGES,
  ...MALAY_LANGUAGES,
  ...MALAYALAM_LANGUAGES,
  ...MANDARIN_LANGUAGES,
  ...MANIPURI_LANGUAGES,
  ...MARANAO_LANGUAGES,
  ...MARATHI_LANGUAGES,
  ...MARWARI_LANGUAGES,
  ...MEITEI_LANGUAGES,
  ...MINNAN_LANGUAGES,
  ...MINANGKABAU_LANGUAGES,
  ...MON_LANGUAGES,
  ...MONGOLIAN_LANGUAGES,
  ...NEPALI_LANGUAGES,
  ...NEWAR_LANGUAGES,
  ...ODIA_LANGUAGES,
  ...PANGASINAN_LANGUAGES,
  ...PUNJABI_LANGUAGES,
  ...RAJASTHANI_LANGUAGES,
  ...ROHINGYA_LANGUAGES,
  ...SANSKRIT_LANGUAGES,
  ...SANTALI_LANGUAGES,
  ...SHAN_LANGUAGES,
  ...SINDHI_LANGUAGES,
  ...SINHALA_LANGUAGES,
  ...SUNDANESE_LANGUAGES,
  ...SYLHETI_LANGUAGES,
  ...TAGALOG_LANGUAGES,
  ...TAJIK_LANGUAGES,
  ...TAMIL_LANGUAGES,
  ...TATAR_LANGUAGES,
  ...TELUGU_LANGUAGES,
  ...TETUM_LANGUAGES,
  ...THAI_LANGUAGES,
  ...TIBETAN_LANGUAGES,
  ...TURKMEN_LANGUAGES,
  ...UDMURT_LANGUAGES,
  ...URDU_LANGUAGES,
  ...UYGHUR_LANGUAGES,
  ...UZBEK_LANGUAGES,
  ...VIETNAMESE_LANGUAGES,
  ...WARAY_LANGUAGES,
  ...WU_LANGUAGES,
  ...XIANG_LANGUAGES,
  ...YAKUT_LANGUAGES,
] as const;

type AsiaAcehneseLanguage = (typeof ACEHNESE_LANGUAGES)[number];
type AsiaAssameseLanguage = (typeof ASSAMESE_LANGUAGES)[number];
type AsiaAwadhiLanguage = (typeof AWADHI_LANGUAGES)[number];
type AsiaBalineseLanguage = (typeof BALINESE_LANGUAGES)[number];
type AsiaBanjarLanguage = (typeof BANJAR_LANGUAGES)[number];
type AsiaBashkirLanguage = (typeof BASHKIR_LANGUAGES)[number];
type AsiaBatakLanguage = (typeof BATAK_LANGUAGES)[number];
type AsiaBengaliLanguage = (typeof BENGALI_LANGUAGES)[number];
type AsiaBhojpuriLanguage = (typeof BHOJPURI_LANGUAGES)[number];
type AsiaBikolLanguage = (typeof BIKOL_LANGUAGES)[number];
type AsiaBugineseLanguage = (typeof BUGINESE_LANGUAGES)[number];
type AsiaBurmeseLanguage = (typeof BURMESE_LANGUAGES)[number];
type AsiaCantoneseLanguage = (typeof CANTONESE_LANGUAGES)[number];
type AsiaCebuanoLanguage = (typeof CEBUANO_LANGUAGES)[number];
type AsiaChhattisgarhiLanguage = (typeof CHHATTISGARHI_LANGUAGES)[number];
type AsiaChineseLanguage = (typeof CHINESE_LANGUAGES)[number];
type AsiaChittagonianLanguage = (typeof CHITTAGONIAN_LANGUAGES)[number];
type AsiaChuvashLanguage = (typeof CHUVASH_LANGUAGES)[number];
type AsiaDzongkhaLanguage = (typeof DZONGKHA_LANGUAGES)[number];
type AsiaFilipinoLanguage = (typeof FILIPINO_LANGUAGES)[number];
type AsiaGanLanguage = (typeof GAN_LANGUAGES)[number];
type AsiaGarhwaliLanguage = (typeof GARHWALI_LANGUAGES)[number];
type AsiaGondiLanguage = (typeof GONDI_LANGUAGES)[number];
type AsiaGujaratiLanguage = (typeof GUJARATI_LANGUAGES)[number];
type AsiaHakkaLanguage = (typeof HAKKA_LANGUAGES)[number];
type AsiaHaryanviLanguage = (typeof HARYANVI_LANGUAGES)[number];
type AsiaHiligaynonLanguage = (typeof HILIGAYNON_LANGUAGES)[number];
type AsiaHindiLanguage = (typeof HINDI_LANGUAGES)[number];
type AsiaHmongLanguage = (typeof HMONG_LANGUAGES)[number];
type AsiaIlocanoLanguage = (typeof ILOCANO_LANGUAGES)[number];
type AsiaIndonesianLanguage = (typeof INDONESIAN_LANGUAGES)[number];
type AsiaJapaneseLanguage = (typeof JAPANESE_LANGUAGES)[number];
type AsiaJavaneseLanguage = (typeof JAVANESE_LANGUAGES)[number];
type AsiaKannadaLanguage = (typeof KANNADA_LANGUAGES)[number];
type AsiaKapampanganLanguage = (typeof KAPAMPANGAN_LANGUAGES)[number];
type AsiaKarenLanguage = (typeof KAREN_LANGUAGES)[number];
type AsiaKashmiriLanguage = (typeof KASHMIRI_LANGUAGES)[number];
type AsiaKazakhLanguage = (typeof KAZAKH_LANGUAGES)[number];
type AsiaKhmerLanguage = (typeof KHMER_LANGUAGES)[number];
type AsiaKomiLanguage = (typeof KOMI_LANGUAGES)[number];
type AsiaKonkaniLanguage = (typeof KONKANI_LANGUAGES)[number];
type AsiaKoreanLanguage = (typeof KOREAN_LANGUAGES)[number];
type AsiaKyrgyzLanguage = (typeof KYRGYZ_LANGUAGES)[number];
type AsiaLaoLanguage = (typeof LAO_LANGUAGES)[number];
type AsiaMadureseLanguage = (typeof MADURESE_LANGUAGES)[number];
type AsiaMaithiliLanguage = (typeof MAITHILI_LANGUAGES)[number];
type AsiaMakassarLanguage = (typeof MAKASSAR_LANGUAGES)[number];
type AsiaMalayLanguage = (typeof MALAY_LANGUAGES)[number];
type AsiaMalayalamLanguage = (typeof MALAYALAM_LANGUAGES)[number];
type AsiaMandarinLanguage = (typeof MANDARIN_LANGUAGES)[number];
type AsiaManipuriLanguage = (typeof MANIPURI_LANGUAGES)[number];
type AsiaMaranaoLanguage = (typeof MARANAO_LANGUAGES)[number];
type AsiaMarathiLanguage = (typeof MARATHI_LANGUAGES)[number];
type AsiaMarwariLanguage = (typeof MARWARI_LANGUAGES)[number];
type AsiaMeiteiLanguage = (typeof MEITEI_LANGUAGES)[number];
type AsiaMinNanLanguage = (typeof MINNAN_LANGUAGES)[number];
type AsiaMinangkabauLanguage = (typeof MINANGKABAU_LANGUAGES)[number];
type AsiaMonLanguage = (typeof MON_LANGUAGES)[number];
type AsiaMongolianLanguage = (typeof MONGOLIAN_LANGUAGES)[number];
type AsiaNepaliLanguage = (typeof NEPALI_LANGUAGES)[number];
type AsiaNewarLanguage = (typeof NEWAR_LANGUAGES)[number];
type AsiaOdiaLanguage = (typeof ODIA_LANGUAGES)[number];
type AsiaPangasinanLanguage = (typeof PANGASINAN_LANGUAGES)[number];
type AsiaPunjabiLanguage = (typeof PUNJABI_LANGUAGES)[number];
type AsiaRajasthaniLanguage = (typeof RAJASTHANI_LANGUAGES)[number];
type AsiaRohingyaLanguage = (typeof ROHINGYA_LANGUAGES)[number];
type AsiaSanskritLanguage = (typeof SANSKRIT_LANGUAGES)[number];
type AsiaSantaliLanguage = (typeof SANTALI_LANGUAGES)[number];
type AsiaShanLanguage = (typeof SHAN_LANGUAGES)[number];
type AsiaSindhiLanguage = (typeof SINDHI_LANGUAGES)[number];
type AsiaSinhalaLanguage = (typeof SINHALA_LANGUAGES)[number];
type AsiaSundaneseLanguage = (typeof SUNDANESE_LANGUAGES)[number];
type AsiaSylhetiLanguage = (typeof SYLHETI_LANGUAGES)[number];
type AsiaTagalogLanguage = (typeof TAGALOG_LANGUAGES)[number];
type AsiaTajikLanguage = (typeof TAJIK_LANGUAGES)[number];
type AsiaTamilLanguage = (typeof TAMIL_LANGUAGES)[number];
type AsiaTatarLanguage = (typeof TATAR_LANGUAGES)[number];
type AsiaTeluguLanguage = (typeof TELUGU_LANGUAGES)[number];
type AsiaTetumLanguage = (typeof TETUM_LANGUAGES)[number];
type AsiaThaiLanguage = (typeof THAI_LANGUAGES)[number];
type AsiaTibetanLanguage = (typeof TIBETAN_LANGUAGES)[number];
type AsiaTurkmenLanguage = (typeof TURKMEN_LANGUAGES)[number];
type AsiaUdmurtLanguage = (typeof UDMURT_LANGUAGES)[number];
type AsiaUrduLanguage = (typeof URDU_LANGUAGES)[number];
type AsiaUyghurLanguage = (typeof UYGHUR_LANGUAGES)[number];
type AsiaUzbekLanguage = (typeof UZBEK_LANGUAGES)[number];
type AsiaVietnameseLanguage = (typeof VIETNAMESE_LANGUAGES)[number];
type AsiaWarayLanguage = (typeof WARAY_LANGUAGES)[number];
type AsiaWuLanguage = (typeof WU_LANGUAGES)[number];
type AsiaXiangLanguage = (typeof XIANG_LANGUAGES)[number];
type AsiaYakutLanguage = (typeof YAKUT_LANGUAGES)[number];
type AsiaLanguage = (typeof ASIA_LANGUAGES)[number];

export type {
  AsiaAcehneseLanguage,
  AsiaAssameseLanguage,
  AsiaAwadhiLanguage,
  AsiaBalineseLanguage,
  AsiaBanjarLanguage,
  AsiaBashkirLanguage,
  AsiaBatakLanguage,
  AsiaBengaliLanguage,
  AsiaBhojpuriLanguage,
  AsiaBikolLanguage,
  AsiaBugineseLanguage,
  AsiaBurmeseLanguage,
  AsiaCantoneseLanguage,
  AsiaCebuanoLanguage,
  AsiaChhattisgarhiLanguage,
  AsiaChineseLanguage,
  AsiaChittagonianLanguage,
  AsiaChuvashLanguage,
  AsiaDzongkhaLanguage,
  AsiaFilipinoLanguage,
  AsiaGanLanguage,
  AsiaGarhwaliLanguage,
  AsiaGondiLanguage,
  AsiaGujaratiLanguage,
  AsiaHakkaLanguage,
  AsiaHaryanviLanguage,
  AsiaHiligaynonLanguage,
  AsiaHindiLanguage,
  AsiaHmongLanguage,
  AsiaIlocanoLanguage,
  AsiaIndonesianLanguage,
  AsiaJapaneseLanguage,
  AsiaJavaneseLanguage,
  AsiaKannadaLanguage,
  AsiaKapampanganLanguage,
  AsiaKarenLanguage,
  AsiaKashmiriLanguage,
  AsiaKazakhLanguage,
  AsiaKhmerLanguage,
  AsiaKomiLanguage,
  AsiaKonkaniLanguage,
  AsiaKoreanLanguage,
  AsiaKyrgyzLanguage,
  AsiaLaoLanguage,
  AsiaMadureseLanguage,
  AsiaMaithiliLanguage,
  AsiaMakassarLanguage,
  AsiaMalayLanguage,
  AsiaMalayalamLanguage,
  AsiaMandarinLanguage,
  AsiaManipuriLanguage,
  AsiaMaranaoLanguage,
  AsiaMarathiLanguage,
  AsiaMarwariLanguage,
  AsiaMeiteiLanguage,
  AsiaMinNanLanguage,
  AsiaMinangkabauLanguage,
  AsiaMonLanguage,
  AsiaMongolianLanguage,
  AsiaNepaliLanguage,
  AsiaNewarLanguage,
  AsiaOdiaLanguage,
  AsiaPangasinanLanguage,
  AsiaPunjabiLanguage,
  AsiaRajasthaniLanguage,
  AsiaRohingyaLanguage,
  AsiaSanskritLanguage,
  AsiaSantaliLanguage,
  AsiaShanLanguage,
  AsiaSindhiLanguage,
  AsiaSinhalaLanguage,
  AsiaSundaneseLanguage,
  AsiaSylhetiLanguage,
  AsiaTagalogLanguage,
  AsiaTajikLanguage,
  AsiaTamilLanguage,
  AsiaTatarLanguage,
  AsiaTeluguLanguage,
  AsiaTetumLanguage,
  AsiaThaiLanguage,
  AsiaTibetanLanguage,
  AsiaTurkmenLanguage,
  AsiaUdmurtLanguage,
  AsiaUrduLanguage,
  AsiaUyghurLanguage,
  AsiaUzbekLanguage,
  AsiaVietnameseLanguage,
  AsiaWarayLanguage,
  AsiaWuLanguage,
  AsiaXiangLanguage,
  AsiaYakutLanguage,
  AsiaLanguage,
};

export default {
  ...Acehnese,
  ...Assamese,
  ...Awadhi,
  ...Balinese,
  ...Banjar,
  ...Bashkir,
  ...Batak,
  ...Bengali,
  ...Bhojpuri,
  ...Bikol,
  ...Buginese,
  ...Burmese,
  ...Cantonese,
  ...Cebuano,
  ...Chhattisgarhi,
  ...Chinese,
  ...Chittagonian,
  ...Chuvash,
  ...Dzongkha,
  ...Filipino,
  ...Gan,
  ...Garhwali,
  ...Gondi,
  ...Gujarati,
  ...Hakka,
  ...Haryanvi,
  ...Hiligaynon,
  ...Hindi,
  ...Hmong,
  ...Ilocano,
  ...Indonesian,
  ...Japanese,
  ...Javanese,
  ...Kannada,
  ...Kapampangan,
  ...Karen,
  ...Kashmiri,
  ...Kazakh,
  ...Khmer,
  ...Komi,
  ...Konkani,
  ...Korean,
  ...Kyrgyz,
  ...Lao,
  ...Madurese,
  ...Maithili,
  ...Makassar,
  ...Malay,
  ...Malayalam,
  ...Mandarin,
  ...Manipuri,
  ...Maranao,
  ...Marathi,
  ...Marwari,
  ...Meitei,
  ...MinNan,
  ...Minangkabau,
  ...Mon,
  ...Mongolian,
  ...Nepali,
  ...Newar,
  ...Odia,
  ...Pangasinan,
  ...Punjabi,
  ...Rajasthani,
  ...Rohingya,
  ...Sanskrit,
  ...Santali,
  ...Shan,
  ...Sindhi,
  ...Sinhala,
  ...Sundanese,
  ...Sylheti,
  ...Tagalog,
  ...Tajik,
  ...Tamil,
  ...Tatar,
  ...Telugu,
  ...Tetum,
  ...Thai,
  ...Tibetan,
  ...Turkmen,
  ...Udmurt,
  ...Urdu,
  ...Uyghur,
  ...Uzbek,
  ...Vietnamese,
  ...Waray,
  ...Wu,
  ...Xiang,
  ...Yakut,
  ACEHNESE_LANGUAGES,
  ASSAMESE_LANGUAGES,
  AWADHI_LANGUAGES,
  BALINESE_LANGUAGES,
  BANJAR_LANGUAGES,
  BASHKIR_LANGUAGES,
  BATAK_LANGUAGES,
  BENGALI_LANGUAGES,
  BHOJPURI_LANGUAGES,
  BIKOL_LANGUAGES,
  BUGINESE_LANGUAGES,
  BURMESE_LANGUAGES,
  CANTONESE_LANGUAGES,
  CEBUANO_LANGUAGES,
  CHHATTISGARHI_LANGUAGES,
  CHINESE_LANGUAGES,
  CHITTAGONIAN_LANGUAGES,
  CHUVASH_LANGUAGES,
  DZONGKHA_LANGUAGES,
  FILIPINO_LANGUAGES,
  GAN_LANGUAGES,
  GARHWALI_LANGUAGES,
  GONDI_LANGUAGES,
  GUJARATI_LANGUAGES,
  HAKKA_LANGUAGES,
  HARYANVI_LANGUAGES,
  HILIGAYNON_LANGUAGES,
  HINDI_LANGUAGES,
  HMONG_LANGUAGES,
  ILOCANO_LANGUAGES,
  INDONESIAN_LANGUAGES,
  JAPANESE_LANGUAGES,
  JAVANESE_LANGUAGES,
  KANNADA_LANGUAGES,
  KAPAMPANGAN_LANGUAGES,
  KAREN_LANGUAGES,
  KASHMIRI_LANGUAGES,
  KAZAKH_LANGUAGES,
  KHMER_LANGUAGES,
  KOMI_LANGUAGES,
  KONKANI_LANGUAGES,
  KOREAN_LANGUAGES,
  KYRGYZ_LANGUAGES,
  LAO_LANGUAGES,
  MADURESE_LANGUAGES,
  MAITHILI_LANGUAGES,
  MAKASSAR_LANGUAGES,
  MALAY_LANGUAGES,
  MALAYALAM_LANGUAGES,
  MANDARIN_LANGUAGES,
  MANIPURI_LANGUAGES,
  MARANAO_LANGUAGES,
  MARATHI_LANGUAGES,
  MARWARI_LANGUAGES,
  MEITEI_LANGUAGES,
  MINNAN_LANGUAGES,
  MINANGKABAU_LANGUAGES,
  MON_LANGUAGES,
  MONGOLIAN_LANGUAGES,
  NEPALI_LANGUAGES,
  NEWAR_LANGUAGES,
  ODIA_LANGUAGES,
  PANGASINAN_LANGUAGES,
  PUNJABI_LANGUAGES,
  RAJASTHANI_LANGUAGES,
  ROHINGYA_LANGUAGES,
  SANSKRIT_LANGUAGES,
  SANTALI_LANGUAGES,
  SHAN_LANGUAGES,
  SINDHI_LANGUAGES,
  SINHALA_LANGUAGES,
  SUNDANESE_LANGUAGES,
  SYLHETI_LANGUAGES,
  TAGALOG_LANGUAGES,
  TAJIK_LANGUAGES,
  TAMIL_LANGUAGES,
  TATAR_LANGUAGES,
  TELUGU_LANGUAGES,
  TETUM_LANGUAGES,
  THAI_LANGUAGES,
  TIBETAN_LANGUAGES,
  TURKMEN_LANGUAGES,
  UDMURT_LANGUAGES,
  URDU_LANGUAGES,
  UYGHUR_LANGUAGES,
  UZBEK_LANGUAGES,
  VIETNAMESE_LANGUAGES,
  WARAY_LANGUAGES,
  WU_LANGUAGES,
  XIANG_LANGUAGES,
  YAKUT_LANGUAGES,
  ASIA_LANGUAGES,
};
