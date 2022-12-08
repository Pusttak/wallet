import React from 'react';
import LoginForm from '../../components/loginForm';
// import './loginPage.scss';
import { PageWrapper, PageText } from './loginPage.styled';

const LoginPage = () => {
  return (
    <div>
      <PageWrapper>
        <PageText>Finance App</PageText>
        <LoginForm />
      </PageWrapper>
    </div>
  );
};

export default LoginPage;
