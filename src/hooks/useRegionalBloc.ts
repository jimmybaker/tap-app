import { useState, useEffect } from "react";
import useRegionalBlocs from "./useRegionalBlocs";

export default function useRegionalBloc(acronym: string) {
  const [bloc, setBloc] = useState<IRegionalBloc | undefined>(undefined);
  const { blocs, loading } = useRegionalBlocs();

  useEffect(() => {
    setBloc(blocs.find((b) => b.acronym === acronym));
  }, [loading, blocs, acronym]);

  return { loading, bloc };
}
