import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  number: "",
};
export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={numberFieldId}
          />
        </div>

        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
