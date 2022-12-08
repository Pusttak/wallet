import { React } from 'react';
import { useSignUpUserMutation } from '../../redux/authSlice';

import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';

import MyTextInput from '../myTextInput';
import MainButton from '../mainButton';
import Logo from '../logo';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import { ReactComponent as LockIcon } from '../../icons/lock.svg';
import { ReactComponent as UserIcon } from '../../icons/user.svg';

import './registrationForm.scss';
import '../mainButton/mainButton.scss';

Notiflix.Notify.init({
  width: 'auto',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

function RegistrationForm() {
  let [register] = useSignUpUserMutation();

  const validationsSchema = Yup.object().shape({
    email: Yup.string('Enter e-mail')
      .email('Please enter a valid e-mail')
      .required('Mandatory field!'),
    password: Yup.string('Enter password')
      .min(6, 'Password must be at least 6 characters long')
      .max(14, 'Password must be a maximum of 14 characters')
      .required('Mandatory field!'),
    passwordConfirm: Yup.string('Confirm your password').required(
      'Mandatory field!'
    ),
    name: Yup.string('Enter your name')
      .min(1, 'Name sould have at least 1 symbol')
      .max(12, '12 symbols max for Name'),
  });

  const handleRegister = ({ email, password, passwordConfirm, name }) => {
    //console.log('values :>> ', { email, password, passwordConfirm, name });
    if (password === passwordConfirm) {
      register({ email, password, name }).then(e => {
        if (e.error) {
          Notiflix.Notify.failure(
            'Registration failed, please retry registartion'
          );
        }
      });
    } else {
      Notiflix.Notify.failure('Check your password again');
    }
  };

  const isConsistLetters = password => {
    const letters = /[A-Za-z]/;
    if (letters.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  const checkingPasswordQuality = password => {
    const passwordLength = password.length;
    let isLetter = isConsistLetters(password);

    if (passwordLength >= 6 && passwordLength <= 14 && isLetter === false) {
      return 'lowPasswordQuality';
    }
    if (passwordLength >= 6 && passwordLength <= 10 && isLetter === true) {
      return 'middlePasswordQuality';
    }
    if (passwordLength > 10 && passwordLength <= 14 && isLetter === true) {
      return 'strongPasswordQuality';
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: '',
          name: '',
        }}
        validateOnBlur
        onSubmit={handleRegister}
        validationSchema={validationsSchema}
      >
        {({ handleChange, handleBlur, values, isValid, dirty, errors }) => (
          <Form className="form">
            <div className="logo_wrapper">
              <Logo />
              <h1 className="Header__logo--text">Wallet</h1>
            </div>

            <div className="container_input">
              <p className="text">
                Use your email and create a password for registeration:
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

              <div className='passwordWrapper'>
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
                <div className={checkingPasswordQuality(values.password)}></div>
              </div>

              <MyTextInput
                label={<LockIcon width={16} height={21} />}
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                placeholder="Confirm Password"
                className="input"
              />
              {/* {touched.passwordConfirm && errors.passwordConfirm && <p>On Error</p>} */}

              <MyTextInput
                label={<UserIcon width={18} height={18} />}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="First Name"
                className="input"
              />
            </div>

            <div className="button_container">
              <MainButton
                type="submit"
                text="Register"
                disabled={!isValid && !dirty}
                className="logo_btn"
                disable="sd"
              />

              <div>
                <NavLink to="/login" className="main_btn">
                  Log In
                </NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default RegistrationForm;
