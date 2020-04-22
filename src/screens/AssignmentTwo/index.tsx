import React, { useEffect } from "react";
import { observer } from "mobx-react";
import usePageTitle from "../../hooks/usePageTitle";
import useRegionalBlocs from "../../hooks/useRegionalBlocs";

const AssignmentTwo: React.FC = observer(() => {
  const { setPageTitle } = usePageTitle();
  const { blocs, loading } = useRegionalBlocs();

  useEffect(() => {
    setPageTitle("Assignment Two");
  }, []);

  return (
    <div>
      assignment two
      <div>Loading: {loading}</div>
      <div>Countries: {blocs.length}</div>
      {/* <button onClick={() => countryStore.countries.push(0)}>
        add to countries
      </button> */}
    </div>
  );
});

export default AssignmentTwo;
