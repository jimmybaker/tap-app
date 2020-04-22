declare module "react-json-editor";

interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: ICurrency[];
  languages: ILanguage[];
  translations: { [iso639_1: string]: string };
  flag: string;
  regionalBlocs: IRegionalBloc[];
}

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface IRegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

interface IFormField {
  fieldKey: string;
  type: string;
  label: string;
  required?: boolean;
  options?: IFormFieldOption[];
}

interface IUnsanitizedFormField {
  key: string;
  type: string;
  label: string;
  required?: boolean;
  options?: IFormFieldOption[];
}

interface IFormFieldOption {
  label: string;
  value: string;
}
