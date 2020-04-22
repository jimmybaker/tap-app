import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import usePageTitle from "src/hooks/usePageTitle";

const About: React.FC = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("About");
  }, [setPageTitle]);

  return (
    <>
      <Typography variant="h5">About this project</Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        This site is an application challenge submission from Jimmy Baker.
      </Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        There are two assignments that are linked in the left-hand drawer of
        this page. The first assignment was to use a JSON object to define and
        render a dynamic form. The second assignment was to use the
        https://restcountries.eu/rest/v2/all API along with MobX and React hooks
        to make building a country browser a breeze.
      </Typography>
    </>
  );
};

export default About;
