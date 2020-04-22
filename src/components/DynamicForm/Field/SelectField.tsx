import React from "react";
import { DynamicFormFieldProps } from ".";

const SelectField: React.FC<DynamicFormFieldProps> = ({
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
      <select name={fieldKey} onChange={handleChange}>
        {options.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
