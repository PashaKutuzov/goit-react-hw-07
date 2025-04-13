import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../redux/tasksOps";
import * as Yup from "yup";
import css from "./ContactsStyle/ContactForm.module.css";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSummit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSummit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.containerInput}>
          <label>Username</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.containerInput}>
          <label>Tel number</label>
          <Field className={css.input} type="number" name="number" />
          <ErrorMessage
            className={css.error}
            name="telephone"
            component="span"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
