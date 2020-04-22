import React from "react";
import { DynamicFormFieldProps } from ".";

const CheckboxField: React.FC<DynamicFormFieldProps> = ({
  fieldKey,
  label,
  handleChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input name={fieldKey} type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default CheckboxField;
