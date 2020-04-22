import React from "react";
import { DynamicFormFieldProps } from ".";

const RadioField: React.FC<DynamicFormFieldProps> = ({
  fieldKey,
  label,
  handleChange,
  options,
}) => {
  if (!options) {
    return null;
  }

  return (
    <div>
      <label>{label}</label>
      {options.map((o) => (
        <div key={o.label}>
          <input
            type="radio"
            name={fieldKey}
            value={o.value}
            onChange={handleChange}
          ></input>
          <label>{o.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
