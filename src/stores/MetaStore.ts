import { observable, action } from "mobx";
import { createContext } from "react";

class MetaStore {
  @observable
  pageTitle: string = "";

  @action
  setPageTitle = (value: string) => {
    this.pageTitle = value;
  };
}

export const MetaStoreContext = createContext(new MetaStore());
