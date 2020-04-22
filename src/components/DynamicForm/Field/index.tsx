import React from "react";
import TextField from "./TextField";
import CheckboxField from "./CheckboxField";
import MultipleCheckboxField from "./MultipleCheckboxField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

interface IProps {
  handleChange: any;
}

export type DynamicFormFieldProps = IFormField & IProps;

const Field: React.FC<DynamicFormFieldProps> = (props) => {
  const { type } = props;

  switch (type) {
    case "text":
      return <TextField {...props} />;
    case "checkbox_single":
      return <CheckboxField {...props} />;
    case "checkbox_multiple":
      return <MultipleCheckboxField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "radio":
      return <RadioField {...props} />;
    default:
      return null;
  }
};

export default Field;
