import React from "react";
import { observer } from "mobx-react";
import { Switch, Route } from "react-router-dom";
import RegionalBlocs from "./screens/RegionalBlocs";
import Countries from "./screens/Countries";

const AssignmentTwo: React.FC = observer(() => {
  return (
    <Switch>
      <Route path="/two/countries">
        <Countries />
      </Route>
      <Route path="/two/regions/:acronym">
        <Countries />
      </Route>
      <Route path="/two">
        <RegionalBlocs />
      </Route>
    </Switch>
  );
});

export default AssignmentTwo;
