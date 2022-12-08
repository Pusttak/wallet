import styled from 'styled-components';
import { Form } from 'formik';
import { Select } from 'react-dropdown-select';

export const StyledForm = styled(Form)`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: auto;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledField = styled(Select)`
  &.react-dropdown-select {
    position: relative;
    height: 50px;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 30px;
    font-family: 'Circe';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 0 20px 0 20px;
    color: #000;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 10px;
      display: block;
      width: 12px;
      height: 12px;
      border-top: 1px solid;
      border-left: 1px solid;
      transform: rotate(-135deg) translateY(-50%);
      transform-origin: 0 0;
    }
  }

  .react-dropdown-select-dropdown-handle {
    position: absolute;
    visibility: hidden;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
