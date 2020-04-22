import { observable, action } from "mobx";
import { createContext } from "react";

class CountryStore {
  @observable
  countries: ICountry[] = [];

  @action
  setCountries = (countries: ICountry[]) => {
    this.countries = countries;
  };
}

export const CountryStoreContext = createContext(new CountryStore());
