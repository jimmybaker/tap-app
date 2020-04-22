import { useState, useEffect } from "react";
import useCountries from "./useCountries";

export default function useCountry(alpha2Code: string) {
  const [country, setCountry] = useState<ICountry | undefined>(undefined);
  const { countries, loading } = useCountries();

  useEffect(() => {
    setCountry(countries.find((c) => c.alpha2Code === alpha2Code));
  }, [alpha2Code, loading, countries]);

  return { loading, country };
}
