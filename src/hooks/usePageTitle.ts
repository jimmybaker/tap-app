import { useContext } from "react";
import { MetaStoreContext } from "../stores/MetaStore";

function usePageTitle() {
  const metaContext = useContext(MetaStoreContext);

  return {
    pageTitle: metaContext.pageTitle,
    setPageTitle: metaContext.setPageTitle,
  };
}

export default usePageTitle;
