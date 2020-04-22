import React, { useEffect } from "react";
import useRegionalBlocs from "src/hooks/useRegionalBlocs";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import usePageTitle from "src/hooks/usePageTitle";
import { Typography, Paper } from "@material-ui/core";

const RegionalBlocs: React.FC = () => {
  const { setPageTitle } = usePageTitle();
  const history = useHistory();
  const { blocs } = useRegionalBlocs();

  useEffect(() => {
    setPageTitle("Regions");
  }, [setPageTitle]);

  function renderRow({ index, style }: any) {
    const bloc = blocs[index];
    const handleClick = () => history.push(`/two/regions/${bloc.acronym}`);

    return (
      <ListItem button style={style} key={index} onClick={handleClick}>
        <ListItemText primary={bloc.name} />
      </ListItem>
    );
  }

  return (
    <div>
      <Typography variant="h5">Select a region from the list</Typography>
      <Paper elevation={0} variant="outlined">
        <FixedSizeList
          height={400}
          width={500}
          itemSize={46}
          itemCount={blocs.length}
        >
          {renderRow}
        </FixedSizeList>
      </Paper>
    </div>
  );
};

export default RegionalBlocs;
