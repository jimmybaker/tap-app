import { useState, useEffect } from "react";
import useCountries from "./useCountries";
import uniq from "lodash/uniq";
import flatten from "lodash/flatten";

export default function useRegionalBlocs() {
  const [blocs, setBlocs] = useState<any[]>([]);
  const { countries, loading } = useCountries();

  useEffect(() => {
    setBlocs(uniq(flatten(countries.map((c) => c.regionalBlocs))));
  }, [loading, countries]);

  return { loading, blocs };
}
