import { useContext, useState, useEffect } from "react";
import { CountryStoreContext } from "../stores/CountryStore";

interface IFilters {
  acronym?: string;
}

export default function useCountries({ acronym }: IFilters = {}) {
  const [result, setResult] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(false);
  const { countries, setCountries } = useContext(CountryStoreContext);

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      const res = await fetch(
        "https://restcountries.eu/rest/v2/all"
      ).then((r) => r.json());
      setLoading(false);
      setCountries(res);
      setResult(res);
    }

    if (countries.length) {
      if (acronym) {
        setResult(
          countries.filter((c) =>
            c.regionalBlocs.map((r) => r.acronym).includes(acronym)
          )
        );
      } else {
        setResult(countries);
      }
    } else {
      fetchCountries();
    }
  }, [countries, setCountries, acronym]);

  return { countries: result, loading };
}
