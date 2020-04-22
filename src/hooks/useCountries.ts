import { useContext, useState, useEffect } from "react";
import { CountryStoreContext } from "../stores/CountryStore";

export default function useCountries() {
  const [result, setResult] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { countries, setCountries } = useContext(CountryStoreContext);

  // if(countries.length) {
  //   return { countries, loading }
  // }
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
      setResult(countries);
    } else {
      fetchCountries();
    }
  }, [countries, setCountries]);

  return { countries: result, loading };
}
