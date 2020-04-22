import React from "react";
import { DynamicFormFieldProps } from ".";

const TextField: React.FC<DynamicFormFieldProps> = ({
  fieldKey,
  label,
  handleChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input name={fieldKey} onChange={handleChange} />
    </div>
  );
};

export default TextField;
