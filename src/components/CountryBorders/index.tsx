import React from "react";
import useCountry from "src/hooks/useCountry";
import { List, ListItem } from "@material-ui/core";
import useCountries from "src/hooks/useCountries";

interface IProps {
  alpha2Code: string;
}

const CountryBorders: React.FC<IProps> = ({ alpha2Code }) => {
  const { countries, loading } = useCountries();
  const { country } = useCountry(alpha2Code);

  if (loading) {
    return null;
  }

  const borders = countries.filter((c) =>
    country?.borders.includes(c.alpha3Code)
  );

  return (
    <List>
      {borders.map((c) => (
        <ListItem>{c.name}</ListItem>
      ))}
    </List>
  );
};

export default CountryBorders;
