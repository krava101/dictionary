import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import css from './LoginForm.module.css';
import { useId } from 'react';
import { NavLink } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const ValidationSchema = object({
  email: string().email(),
  password: string().required(),
});

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <div className={css.loginWrap}>
      <div className={css.login}>
        <p className={css.title}>Login</p>
        <p className={css.text}>
          Please enter your login details to continue using our service:
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="email"
              id={emailId}
              placeholder="Email"
            />
            <Field
              className={css.input}
              type="text"
              name="password"
              id={passwordId}
              placeholder="Password"
            />
            <button className={css.btn} type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
