import React from "react";
import { DynamicFormFieldProps } from ".";

const MultipleCheckboxField: React.FC<DynamicFormFieldProps> = ({
  fieldKey,
  label,
  handleChange,
  options,
}) => {
  if (!options) {
    return null;
  }

  return (
    <>
      <div>{label}</div>
      {options.map((o) => (
        <div key={o.value}>
          <label>{o.label}</label>
          <input
            name={fieldKey}
            value={o.value}
            type="checkbox"
            onChange={handleChange}
          />
        </div>
      ))}
    </>
  );
};

export default MultipleCheckboxField;
