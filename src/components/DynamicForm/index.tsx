import React from "react";
import { Formik } from "formik";
import Field from "./Field";

interface IProps {
  fields: IFormField[];
  onSubmit: (values: any) => void;
}

const DynamicForm: React.FC<IProps> = ({ fields, onSubmit: submit }) => {
  return (
    <Formik initialValues={{}} onSubmit={submit}>
      {({ values, handleSubmit, handleChange }) => {
        return (
          <form onSubmit={handleSubmit}>
            {fields.map((f) => (
              <div key={f.fieldKey}>
                <Field {...f} handleChange={handleChange} />
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default DynamicForm;
