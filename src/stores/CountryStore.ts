import { observable, action } from "mobx";
import { createContext } from "react";

class CountryStore {
  @observable
  countries: any[] = [];

  @action
  setCountries = (countries: any[]) => {
    this.countries = countries;
  };
}

export const CountryStoreContext = createContext(new CountryStore());
