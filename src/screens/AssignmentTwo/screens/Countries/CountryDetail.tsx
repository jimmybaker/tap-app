import React, { useEffect } from "react";
import {
  CircularProgress,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import useCountry from "src/hooks/useCountry";
import usePageTitle from "src/hooks/usePageTitle";
import humanize from "humanize-plus";
import CountryBorders from "src/components/CountryBorders";

import styles from "./Countries.module.scss";

const CountryDetail: React.FC = () => {
  const { alpha2Code } = useParams();
  const { loading, country } = useCountry(alpha2Code!);
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle(country && country.name);
  }, [setPageTitle, country, loading, alpha2Code]);

  if (loading || !country) {
    return <CircularProgress />;
  }

  return (
    <Card className={styles.country}>
      <CardMedia
        component="img"
        src={country.flag}
        title={country.name}
        className={styles.flag}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {country.name}
        </Typography>
        <Typography gutterBottom>
          Population: {humanize.compactInteger(country.population)}
        </Typography>
        <Typography gutterBottom>Borders:</Typography>
        <CountryBorders alpha2Code={country.alpha2Code} />
      </CardContent>
    </Card>
  );
};

export default CountryDetail;
