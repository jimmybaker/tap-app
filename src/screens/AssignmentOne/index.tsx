import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import usePageTitle from "src/hooks/usePageTitle";
import fieldData from "./fields.json";
import DynamicForm from "src/components/DynamicForm";

import styles from "./JsonForm.module.scss";
import { Formik } from "formik";

const AssignmentOne: React.FC = () => {
  const { setPageTitle } = usePageTitle();
  const [fields, setFields] = useState<IUnsanitizedFormField[]>(
    fieldData as IUnsanitizedFormField[]
  );
  const [values, setValues] = useState<any>({});

  function processFields(unsanitaryFields: IUnsanitizedFormField[]) {
    const sanitizedFields: IFormField[] = [];
    unsanitaryFields.forEach(({ key, label, type, options, required }) => {
      sanitizedFields.push({
        fieldKey: key,
        label,
        type,
        options,
        required,
      });
    });

    return sanitizedFields;
  }

  useEffect(() => {
    setPageTitle("JSON Form");
  }, [setPageTitle]);

  return (
    <div>
      <Paper elevation={0}>
        <Typography variant="h4">
          This project demonstrates a form that is dynamically built using JSON.
        </Typography>
        <Divider style={{ margin: 20 }} />

        <div className={styles.wrapper}>
          <div>
            <Typography>The JSON that defines the form:</Typography>

            <Formik
              initialValues={{ data: JSON.stringify(fields) }}
              onSubmit={(values) => setFields(JSON.parse(values.data))}
            >
              {({ values, handleSubmit, handleChange }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <textarea
                      name="data"
                      rows={10}
                      cols={100}
                      onChange={handleChange}
                    >
                      {values.data}
                    </textarea>
                    <div>
                      <button type="submit">Update Form</button>
                    </div>
                  </form>
                );
              }}
            </Formik>

            <Divider style={{ margin: 20 }} />

            <Typography>The rendered form:</Typography>
            <DynamicForm
              fields={processFields(fields)}
              onSubmit={(vals: any) => setValues(vals)}
            />
          </div>

          <div>
            <Typography>
              The values resulting from the form submission:
            </Typography>
            {JSON.stringify(values)}
          </div>
        </div>
      </Paper>

      {/* <Modal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ></Modal> */}
    </div>
  );
};

export default AssignmentOne;
