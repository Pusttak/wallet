import { React } from 'react';
import { useLoginMutation } from '../../redux/authSlice';

import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';

import MyTextInput from '../myTextInput';
import MainButton from '../mainButton';
import Logo from '../logo';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as LockIcon } from '../../icons/lock.svg';

import '../mainButton/mainButton.scss';

function LoginForm() {
  let [login] = useLoginMutation();

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter e-mail')
      .email('Please enter a valid e-mail')
      .required('Mandatory field!'),
    password: Yup.string('Enter password')
      .min(6, 'Password must be at least 6 characters long')
      .max(14, 'Password must be a maximum of 14 characters')
      .required('Mandatory field!'),
  });

  const handleLogin = ({ email, password }) => {
    login({ email, password }).then(e => {
      if (e.error) {
        Notiflix.Notify.failure(e.error.data.message);
        return;
      }
    });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleLogin}
        validationSchema={validationsSchema}
      >
        {({ handleChange, handleBlur, values, isValid, dirty }) => (
          <Form className="form-login">
            <div className="logo_wrapper">
              <Logo />
              <h1 className="logo_text">Wallet</h1>
            </div>

            <div className="container_input">
              <p className="text">
                Log in with email and password by registering:
              </p>

              <MyTextInput
                label={<EmailIcon width={20} height={16} />}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
                className="input"
              />

              <MyTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                className="input"
              />
            </div>

            <div className="button_container">
              <MainButton
                type="submit"
                text="Log In"
                disabled={!isValid && !dirty}
                className="logo_btn"
                disable="sd"
              />

              <div>
                <NavLink to="/register" className="main_btn">
                  Registration
                </NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
