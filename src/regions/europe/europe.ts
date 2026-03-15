import Albanian from './languages/albanian';
import Armenian from './languages/armenian';
import Azerbaijani from './languages/azerbaijani';
import Basque from './languages/basque';
import Belarusian from './languages/belarusian';
import Bosnian from './languages/bosnian';
import Breton from './languages/breton';
import Bulgarian from './languages/bulgarian';
import Catalan from './languages/catalan';
import Corsican from './languages/corsican';
import Croatian from './languages/croatian';
import Czech from './languages/czech';
import Danish from './languages/danish';
import Dutch from './languages/dutch';
import English from './languages/english';
import Esperanto from './languages/esperanto';
import Estonian from './languages/estonian';
import Faroese from './languages/faroese';
import Finnish from './languages/finnish';
import French from './languages/french';
import Frisian from './languages/frisian';
import Galician from './languages/galician';
import Georgian from './languages/georgian';
import German from './languages/german';
import Greek from './languages/greek';
import Hungarian from './languages/hungarian';
import Icelandic from './languages/icelandic';
import Irish from './languages/irish';
import Italian from './languages/italian';
import Kashubian from './languages/kashubian';
import Latin from './languages/latin';
import Latvian from './languages/latvian';
import Ligurian from './languages/ligurian';
import Limburgish from './languages/limburgish';
import Lithuanian from './languages/lithuanian';
import Lombard from './languages/lombard';
import Luxembourgish from './languages/luxembourgish';
import Macedonian from './languages/macedonian';
import Maltese from './languages/maltese';
import Mirandese from './languages/mirandese';
import Montenegrin from './languages/montenegrin';
import Norwegian from './languages/norwegian';
import Occitan from './languages/occitan';
import Polish from './languages/polish';
import Portuguese from './languages/portuguese';
import Romani from './languages/romani';
import Romanian from './languages/romanian';
import Romansh from './languages/romansh';
import Russian from './languages/russian';
import Sardinian from './languages/sardinian';
import Scots from './languages/scots';
import Serbian from './languages/serbian';
import Sicilian from './languages/sicilian';
import Silesian from './languages/silesian';
import Slovak from './languages/slovak';
import Slovenian from './languages/slovenian';
import Spanish from './languages/spanish';
import Swedish from './languages/swedish';
import Ukrainian from './languages/ukrainian';
import Venetian from './languages/venetian';
import Welsh from './languages/welsh';
import Yiddish from './languages/yiddish';

const ALBANIAN_LANGUAGES = [...Object.values(Albanian)] as const;
const ARMENIAN_LANGUAGES = [...Object.values(Armenian)] as const;
const AZERBAIJANI_LANGUAGES = [...Object.values(Azerbaijani)] as const;
const BASQUE_LANGUAGES = [...Object.values(Basque)] as const;
const BELARUSIAN_LANGUAGES = [...Object.values(Belarusian)] as const;
const BOSNIAN_LANGUAGES = [...Object.values(Bosnian)] as const;
const BRETON_LANGUAGES = [...Object.values(Breton)] as const;
const BULGARIAN_LANGUAGES = [...Object.values(Bulgarian)] as const;
const CATALAN_LANGUAGES = [...Object.values(Catalan)] as const;
const CORSICAN_LANGUAGES = [...Object.values(Corsican)] as const;
const CROATIAN_LANGUAGES = [...Object.values(Croatian)] as const;
const CZECH_LANGUAGES = [...Object.values(Czech)] as const;
const DANISH_LANGUAGES = [...Object.values(Danish)] as const;
const DUTCH_LANGUAGES = [...Object.values(Dutch)] as const;
const ENGLISH_LANGUAGES = [...Object.values(English)] as const;
const ESPERANTO_LANGUAGES = [...Object.values(Esperanto)] as const;
const ESTONIAN_LANGUAGES = [...Object.values(Estonian)] as const;
const FAROESE_LANGUAGES = [...Object.values(Faroese)] as const;
const FINNISH_LANGUAGES = [...Object.values(Finnish)] as const;
const FRENCH_LANGUAGES = [...Object.values(French)] as const;
const FRISIAN_LANGUAGES = [...Object.values(Frisian)] as const;
const GALICIAN_LANGUAGES = [...Object.values(Galician)] as const;
const GEORGIAN_LANGUAGES = [...Object.values(Georgian)] as const;
const GERMAN_LANGUAGES = [...Object.values(German)] as const;
const GREEK_LANGUAGES = [...Object.values(Greek)] as const;
const HUNGARIAN_LANGUAGES = [...Object.values(Hungarian)] as const;
const ICELANDIC_LANGUAGES = [...Object.values(Icelandic)] as const;
const IRISH_LANGUAGES = [...Object.values(Irish)] as const;
const ITALIAN_LANGUAGES = [...Object.values(Italian)] as const;
const KASHUBIAN_LANGUAGES = [...Object.values(Kashubian)] as const;
const LATIN_LANGUAGES = [...Object.values(Latin)] as const;
const LATVIAN_LANGUAGES = [...Object.values(Latvian)] as const;
const LIGURIAN_LANGUAGES = [...Object.values(Ligurian)] as const;
const LIMBURGISH_LANGUAGES = [...Object.values(Limburgish)] as const;
const LITHUANIAN_LANGUAGES = [...Object.values(Lithuanian)] as const;
const LOMBARD_LANGUAGES = [...Object.values(Lombard)] as const;
const LUXEMBOURGISH_LANGUAGES = [...Object.values(Luxembourgish)] as const;
const MACEDONIAN_LANGUAGES = [...Object.values(Macedonian)] as const;
const MALTESE_LANGUAGES = [...Object.values(Maltese)] as const;
const MIRANDESE_LANGUAGES = [...Object.values(Mirandese)] as const;
const MONTENEGRIN_LANGUAGES = [...Object.values(Montenegrin)] as const;
const NORWEGIAN_LANGUAGES = [...Object.values(Norwegian)] as const;
const OCCITAN_LANGUAGES = [...Object.values(Occitan)] as const;
const POLISH_LANGUAGES = [...Object.values(Polish)] as const;
const PORTUGUESE_LANGUAGES = [...Object.values(Portuguese)] as const;
const ROMANI_LANGUAGES = [...Object.values(Romani)] as const;
const ROMANIAN_LANGUAGES = [...Object.values(Romanian)] as const;
const ROMANSH_LANGUAGES = [...Object.values(Romansh)] as const;
const RUSSIAN_LANGUAGES = [...Object.values(Russian)] as const;
const SARDINIAN_LANGUAGES = [...Object.values(Sardinian)] as const;
const SCOTS_LANGUAGES = [...Object.values(Scots)] as const;
const SERBIAN_LANGUAGES = [...Object.values(Serbian)] as const;
const SICILIAN_LANGUAGES = [...Object.values(Sicilian)] as const;
const SILESIAN_LANGUAGES = [...Object.values(Silesian)] as const;
const SLOVAK_LANGUAGES = [...Object.values(Slovak)] as const;
const SLOVENIAN_LANGUAGES = [...Object.values(Slovenian)] as const;
const SPANISH_LANGUAGES = [...Object.values(Spanish)] as const;
const SWEDISH_LANGUAGES = [...Object.values(Swedish)] as const;
const UKRAINIAN_LANGUAGES = [...Object.values(Ukrainian)] as const;
const VENETIAN_LANGUAGES = [...Object.values(Venetian)] as const;
const WELSH_LANGUAGES = [...Object.values(Welsh)] as const;
const YIDDISH_LANGUAGES = [...Object.values(Yiddish)] as const;
const EUROPE_LANGUAGES = [
  ...ALBANIAN_LANGUAGES,
  ...ARMENIAN_LANGUAGES,
  ...AZERBAIJANI_LANGUAGES,
  ...BASQUE_LANGUAGES,
  ...BELARUSIAN_LANGUAGES,
  ...BOSNIAN_LANGUAGES,
  ...BRETON_LANGUAGES,
  ...BULGARIAN_LANGUAGES,
  ...CATALAN_LANGUAGES,
  ...CORSICAN_LANGUAGES,
  ...CROATIAN_LANGUAGES,
  ...CZECH_LANGUAGES,
  ...DANISH_LANGUAGES,
  ...DUTCH_LANGUAGES,
  ...ENGLISH_LANGUAGES,
  ...ESPERANTO_LANGUAGES,
  ...ESTONIAN_LANGUAGES,
  ...FAROESE_LANGUAGES,
  ...FINNISH_LANGUAGES,
  ...FRENCH_LANGUAGES,
  ...FRISIAN_LANGUAGES,
  ...GALICIAN_LANGUAGES,
  ...GEORGIAN_LANGUAGES,
  ...GERMAN_LANGUAGES,
  ...GREEK_LANGUAGES,
  ...HUNGARIAN_LANGUAGES,
  ...ICELANDIC_LANGUAGES,
  ...IRISH_LANGUAGES,
  ...ITALIAN_LANGUAGES,
  ...KASHUBIAN_LANGUAGES,
  ...LATIN_LANGUAGES,
  ...LATVIAN_LANGUAGES,
  ...LIGURIAN_LANGUAGES,
  ...LIMBURGISH_LANGUAGES,
  ...LITHUANIAN_LANGUAGES,
  ...LOMBARD_LANGUAGES,
  ...LUXEMBOURGISH_LANGUAGES,
  ...MACEDONIAN_LANGUAGES,
  ...MALTESE_LANGUAGES,
  ...MIRANDESE_LANGUAGES,
  ...MONTENEGRIN_LANGUAGES,
  ...NORWEGIAN_LANGUAGES,
  ...OCCITAN_LANGUAGES,
  ...POLISH_LANGUAGES,
  ...PORTUGUESE_LANGUAGES,
  ...ROMANI_LANGUAGES,
  ...ROMANIAN_LANGUAGES,
  ...ROMANSH_LANGUAGES,
  ...RUSSIAN_LANGUAGES,
  ...SARDINIAN_LANGUAGES,
  ...SCOTS_LANGUAGES,
  ...SERBIAN_LANGUAGES,
  ...SICILIAN_LANGUAGES,
  ...SILESIAN_LANGUAGES,
  ...SLOVAK_LANGUAGES,
  ...SLOVENIAN_LANGUAGES,
  ...SPANISH_LANGUAGES,
  ...SWEDISH_LANGUAGES,
  ...UKRAINIAN_LANGUAGES,
  ...VENETIAN_LANGUAGES,
  ...WELSH_LANGUAGES,
  ...YIDDISH_LANGUAGES,
] as const;

type EuropeAlbanianLanguage = (typeof ALBANIAN_LANGUAGES)[number];
type EuropeArmenianLanguage = (typeof ARMENIAN_LANGUAGES)[number];
type EuropeAzerbaijaniLanguage = (typeof AZERBAIJANI_LANGUAGES)[number];
type EuropeBasqueLanguage = (typeof BASQUE_LANGUAGES)[number];
type EuropeBelarusianLanguage = (typeof BELARUSIAN_LANGUAGES)[number];
type EuropeBosnianLanguage = (typeof BOSNIAN_LANGUAGES)[number];
type EuropeBretonLanguage = (typeof BRETON_LANGUAGES)[number];
type EuropeBulgarianLanguage = (typeof BULGARIAN_LANGUAGES)[number];
type EuropeCatalanLanguage = (typeof CATALAN_LANGUAGES)[number];
type EuropeCorsicanLanguage = (typeof CORSICAN_LANGUAGES)[number];
type EuropeCroatianLanguage = (typeof CROATIAN_LANGUAGES)[number];
type EuropeCzechLanguage = (typeof CZECH_LANGUAGES)[number];
type EuropeDanishLanguage = (typeof DANISH_LANGUAGES)[number];
type EuropeDutchLanguage = (typeof DUTCH_LANGUAGES)[number];
type EuropeEnglishLanguage = (typeof ENGLISH_LANGUAGES)[number];
type EuropeEsperantoLanguage = (typeof ESPERANTO_LANGUAGES)[number];
type EuropeEstonianLanguage = (typeof ESTONIAN_LANGUAGES)[number];
type EuropeFaroeseLanguage = (typeof FAROESE_LANGUAGES)[number];
type EuropeFinnishLanguage = (typeof FINNISH_LANGUAGES)[number];
type EuropeFrenchLanguage = (typeof FRENCH_LANGUAGES)[number];
type EuropeFrisianLanguage = (typeof FRISIAN_LANGUAGES)[number];
type EuropeGalicianLanguage = (typeof GALICIAN_LANGUAGES)[number];
type EuropeGeorgianLanguage = (typeof GEORGIAN_LANGUAGES)[number];
type EuropeGermanLanguage = (typeof GERMAN_LANGUAGES)[number];
type EuropeGreekLanguage = (typeof GREEK_LANGUAGES)[number];
type EuropeHungarianLanguage = (typeof HUNGARIAN_LANGUAGES)[number];
type EuropeIcelandicLanguage = (typeof ICELANDIC_LANGUAGES)[number];
type EuropeIrishLanguage = (typeof IRISH_LANGUAGES)[number];
type EuropeItalianLanguage = (typeof ITALIAN_LANGUAGES)[number];
type EuropeKashubianLanguage = (typeof KASHUBIAN_LANGUAGES)[number];
type EuropeLatinLanguage = (typeof LATIN_LANGUAGES)[number];
type EuropeLatvianLanguage = (typeof LATVIAN_LANGUAGES)[number];
type EuropeLigurianLanguage = (typeof LIGURIAN_LANGUAGES)[number];
type EuropeLimburgishLanguage = (typeof LIMBURGISH_LANGUAGES)[number];
type EuropeLithuanianLanguage = (typeof LITHUANIAN_LANGUAGES)[number];
type EuropeLombardLanguage = (typeof LOMBARD_LANGUAGES)[number];
type EuropeLuxembourgishLanguage = (typeof LUXEMBOURGISH_LANGUAGES)[number];
type EuropeMacedonianLanguage = (typeof MACEDONIAN_LANGUAGES)[number];
type EuropeMalteseLanguage = (typeof MALTESE_LANGUAGES)[number];
type EuropeMirandeseLanguage = (typeof MIRANDESE_LANGUAGES)[number];
type EuropeMontenegrinLanguage = (typeof MONTENEGRIN_LANGUAGES)[number];
type EuropeNorwegianLanguage = (typeof NORWEGIAN_LANGUAGES)[number];
type EuropeOccitanLanguage = (typeof OCCITAN_LANGUAGES)[number];
type EuropePolishLanguage = (typeof POLISH_LANGUAGES)[number];
type EuropePortugueseLanguage = (typeof PORTUGUESE_LANGUAGES)[number];
type EuropeRomaniLanguage = (typeof ROMANI_LANGUAGES)[number];
type EuropeRomanianLanguage = (typeof ROMANIAN_LANGUAGES)[number];
type EuropeRomanshLanguage = (typeof ROMANSH_LANGUAGES)[number];
type EuropeRussianLanguage = (typeof RUSSIAN_LANGUAGES)[number];
type EuropeSardinianLanguage = (typeof SARDINIAN_LANGUAGES)[number];
type EuropeScotsLanguage = (typeof SCOTS_LANGUAGES)[number];
type EuropeSerbianLanguage = (typeof SERBIAN_LANGUAGES)[number];
type EuropeSicilianLanguage = (typeof SICILIAN_LANGUAGES)[number];
type EuropeSilesianLanguage = (typeof SILESIAN_LANGUAGES)[number];
type EuropeSlovakLanguage = (typeof SLOVAK_LANGUAGES)[number];
type EuropeSlovenianLanguage = (typeof SLOVENIAN_LANGUAGES)[number];
type EuropeSpanishLanguage = (typeof SPANISH_LANGUAGES)[number];
type EuropeSwedishLanguage = (typeof SWEDISH_LANGUAGES)[number];
type EuropeUkrainianLanguage = (typeof UKRAINIAN_LANGUAGES)[number];
type EuropeVenetianLanguage = (typeof VENETIAN_LANGUAGES)[number];
type EuropeWelshLanguage = (typeof WELSH_LANGUAGES)[number];
type EuropeYiddishLanguage = (typeof YIDDISH_LANGUAGES)[number];
type EuropeLanguage = (typeof EUROPE_LANGUAGES)[number];

export type {
  EuropeAlbanianLanguage,
  EuropeArmenianLanguage,
  EuropeAzerbaijaniLanguage,
  EuropeBasqueLanguage,
  EuropeBelarusianLanguage,
  EuropeBosnianLanguage,
  EuropeBretonLanguage,
  EuropeBulgarianLanguage,
  EuropeCatalanLanguage,
  EuropeCorsicanLanguage,
  EuropeCroatianLanguage,
  EuropeCzechLanguage,
  EuropeDanishLanguage,
  EuropeDutchLanguage,
  EuropeEnglishLanguage,
  EuropeEsperantoLanguage,
  EuropeEstonianLanguage,
  EuropeFaroeseLanguage,
  EuropeFinnishLanguage,
  EuropeFrenchLanguage,
  EuropeFrisianLanguage,
  EuropeGalicianLanguage,
  EuropeGeorgianLanguage,
  EuropeGermanLanguage,
  EuropeGreekLanguage,
  EuropeHungarianLanguage,
  EuropeIcelandicLanguage,
  EuropeIrishLanguage,
  EuropeItalianLanguage,
  EuropeKashubianLanguage,
  EuropeLatinLanguage,
  EuropeLatvianLanguage,
  EuropeLigurianLanguage,
  EuropeLimburgishLanguage,
  EuropeLithuanianLanguage,
  EuropeLombardLanguage,
  EuropeLuxembourgishLanguage,
  EuropeMacedonianLanguage,
  EuropeMalteseLanguage,
  EuropeMirandeseLanguage,
  EuropeMontenegrinLanguage,
  EuropeNorwegianLanguage,
  EuropeOccitanLanguage,
  EuropePolishLanguage,
  EuropePortugueseLanguage,
  EuropeRomaniLanguage,
  EuropeRomanianLanguage,
  EuropeRomanshLanguage,
  EuropeRussianLanguage,
  EuropeSardinianLanguage,
  EuropeScotsLanguage,
  EuropeSerbianLanguage,
  EuropeSicilianLanguage,
  EuropeSilesianLanguage,
  EuropeSlovakLanguage,
  EuropeSlovenianLanguage,
  EuropeSpanishLanguage,
  EuropeSwedishLanguage,
  EuropeUkrainianLanguage,
  EuropeVenetianLanguage,
  EuropeWelshLanguage,
  EuropeYiddishLanguage,
  EuropeLanguage,
};

export default {
  ...Albanian,
  ...Armenian,
  ...Azerbaijani,
  ...Basque,
  ...Belarusian,
  ...Bosnian,
  ...Breton,
  ...Bulgarian,
  ...Catalan,
  ...Corsican,
  ...Croatian,
  ...Czech,
  ...Danish,
  ...Dutch,
  ...English,
  ...Esperanto,
  ...Estonian,
  ...Faroese,
  ...Finnish,
  ...French,
  ...Frisian,
  ...Galician,
  ...Georgian,
  ...German,
  ...Greek,
  ...Hungarian,
  ...Icelandic,
  ...Irish,
  ...Italian,
  ...Kashubian,
  ...Latin,
  ...Latvian,
  ...Ligurian,
  ...Limburgish,
  ...Lithuanian,
  ...Lombard,
  ...Luxembourgish,
  ...Macedonian,
  ...Maltese,
  ...Mirandese,
  ...Montenegrin,
  ...Norwegian,
  ...Occitan,
  ...Polish,
  ...Portuguese,
  ...Romani,
  ...Romanian,
  ...Romansh,
  ...Russian,
  ...Sardinian,
  ...Scots,
  ...Serbian,
  ...Sicilian,
  ...Silesian,
  ...Slovak,
  ...Slovenian,
  ...Spanish,
  ...Swedish,
  ...Ukrainian,
  ...Venetian,
  ...Welsh,
  ...Yiddish,
  ALBANIAN_LANGUAGES,
  ARMENIAN_LANGUAGES,
  AZERBAIJANI_LANGUAGES,
  BASQUE_LANGUAGES,
  BELARUSIAN_LANGUAGES,
  BOSNIAN_LANGUAGES,
  BRETON_LANGUAGES,
  BULGARIAN_LANGUAGES,
  CATALAN_LANGUAGES,
  CORSICAN_LANGUAGES,
  CROATIAN_LANGUAGES,
  CZECH_LANGUAGES,
  DANISH_LANGUAGES,
  DUTCH_LANGUAGES,
  ENGLISH_LANGUAGES,
  ESPERANTO_LANGUAGES,
  ESTONIAN_LANGUAGES,
  FAROESE_LANGUAGES,
  FINNISH_LANGUAGES,
  FRENCH_LANGUAGES,
  FRISIAN_LANGUAGES,
  GALICIAN_LANGUAGES,
  GEORGIAN_LANGUAGES,
  GERMAN_LANGUAGES,
  GREEK_LANGUAGES,
  HUNGARIAN_LANGUAGES,
  ICELANDIC_LANGUAGES,
  IRISH_LANGUAGES,
  ITALIAN_LANGUAGES,
  KASHUBIAN_LANGUAGES,
  LATIN_LANGUAGES,
  LATVIAN_LANGUAGES,
  LIGURIAN_LANGUAGES,
  LIMBURGISH_LANGUAGES,
  LITHUANIAN_LANGUAGES,
  LOMBARD_LANGUAGES,
  LUXEMBOURGISH_LANGUAGES,
  MACEDONIAN_LANGUAGES,
  MALTESE_LANGUAGES,
  MIRANDESE_LANGUAGES,
  MONTENEGRIN_LANGUAGES,
  NORWEGIAN_LANGUAGES,
  OCCITAN_LANGUAGES,
  POLISH_LANGUAGES,
  PORTUGUESE_LANGUAGES,
  ROMANI_LANGUAGES,
  ROMANIAN_LANGUAGES,
  ROMANSH_LANGUAGES,
  RUSSIAN_LANGUAGES,
  SARDINIAN_LANGUAGES,
  SCOTS_LANGUAGES,
  SERBIAN_LANGUAGES,
  SICILIAN_LANGUAGES,
  SILESIAN_LANGUAGES,
  SLOVAK_LANGUAGES,
  SLOVENIAN_LANGUAGES,
  SPANISH_LANGUAGES,
  SWEDISH_LANGUAGES,
  UKRAINIAN_LANGUAGES,
  VENETIAN_LANGUAGES,
  WELSH_LANGUAGES,
  YIDDISH_LANGUAGES,
  EUROPE_LANGUAGES,
};
