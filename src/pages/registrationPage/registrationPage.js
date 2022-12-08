import React from 'react';
import RegistrationForm from '../../components/registrationForm';
import '../registrationPage/registerPage.scss';
import { ContainerWrapper, PageText } from './register.styled';

const RegistrationPage = () => {
  return (
    <div>
      <ContainerWrapper>
        <PageText>Finance App</PageText>
        <RegistrationForm />
      </ContainerWrapper>
    </div>
  );
};

export default RegistrationPage;
