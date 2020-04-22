import React, { useEffect } from "react";
import {
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
  Paper,
} from "@material-ui/core";
import useCountries from "src/hooks/useCountries";
import { useHistory, Route, useParams, Switch } from "react-router-dom";
import { FixedSizeList } from "react-window";
import usePageTitle from "src/hooks/usePageTitle";
import CountryDetail from "./CountryDetail";

import styles from "./Countries.module.scss";
import useRegionalBloc from "src/hooks/useRegionalBloc";

const Countries: React.FC = () => {
  const { setPageTitle } = usePageTitle();
  const { acronym } = useParams();
  const { loading, countries } = useCountries({ acronym });
  const { bloc } = useRegionalBloc(acronym || "");
  const history = useHistory();

  useEffect(() => {
    if (bloc) {
      setPageTitle(`Countries in ${bloc.name}`);
    } else {
      setPageTitle("Countries");
    }
  }, [loading, setPageTitle, acronym, bloc]);

  if (loading) {
    return <CircularProgress />;
  }

  function renderRow({ index, style }: any) {
    const country = countries[index];
    const handleClick = () =>
      acronym
        ? history.push(`/two/regions/${acronym}/${country.alpha2Code}`)
        : history.push(`/two/countries/${country.alpha2Code}`);

    return (
      <ListItem button style={style} key={index} onClick={handleClick}>
        <ListItemText primary={country.name} />
      </ListItem>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <Typography variant="h5">Select a country from the list</Typography>
        <Paper elevation={0} variant="outlined">
          <FixedSizeList
            height={500}
            width={500}
            itemSize={46}
            itemCount={countries.length}
          >
            {renderRow}
          </FixedSizeList>
        </Paper>
      </div>

      <Switch>
        <Route path="/two/regions/:acronym/:alpha2Code">
          <CountryDetail />
        </Route>
        <Route path="/two/countries/:alpha2Code">
          <CountryDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Countries;
