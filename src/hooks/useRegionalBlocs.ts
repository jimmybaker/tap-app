import { useState, useEffect } from "react";
import useCountries from "./useCountries";
import uniqBy from "lodash/uniqBy";
import flatten from "lodash/flatten";
import sortBy from "lodash/sortBy";

export default function useRegionalBlocs() {
  const [blocs, setBlocs] = useState<IRegionalBloc[]>([]);
  const { countries, loading } = useCountries();

  useEffect(() => {
    setBlocs(
      sortBy(
        uniqBy(flatten(countries.map((c) => c.regionalBlocs)), (r: any) => {
          return r.acronym;
        }),
        (r) => r.name
      )
    );
  }, [loading, countries]);

  return { loading, blocs };
}
