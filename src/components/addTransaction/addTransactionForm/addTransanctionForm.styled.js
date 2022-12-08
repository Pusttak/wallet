import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  @media (min-width: 768px) {
    line-height: 45px;
    font-size: 30px;
  }
`;

export const TransactionForm = styled(Form)`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 395px;
  }
`;

const InputStyle = `
  display: inline-block;
  width:280px;
  padding: 0;
  padding-left:20px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--disabled-grey-text-color);
  outline: none;
  transition: border 250ms linear;
  line-height: 1.47;
  color: var(--primary-text-color);
  cursor: pointer;
  &::placeholder {
    color:#bdbdbd;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid var(--accent-color-blue);
  }
`;

export const CheckboxWrapp = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const CheckboxInput = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxSlider = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
`;

export const CheckboxPoint = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  content: '';
  width: 44px;
  height: 44px;
  border-radius: 100%;
  right: -1px;
  bottom: -2px;
  background-color: ${prop =>
    prop.isChecked ? 'var(--accent-color-grean)' : 'var(--accent-color-red)'};
  transform: ${prop => (prop.isChecked ? 'translateX(-38px)' : '')};
  transition: 0.4s;
  box-shadow: ${prop =>
    prop.isChecked
      ? '0px 6px 15px rgba(36, 204, 167, 0.5)'
      : '0px 6px 15px rgba(255, 101, 150, 0.5)'};
`;

export const CheckboxText = styled.span`
  display: block;
  color: var(--disabled-grey-text-color);
  transition: color 250ms linear;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
`;

export const CheckboxTextIncome = styled(CheckboxText)`
  order: -1;
  margin-right: 20px;
  ${CheckboxInput}:checked ~ & {
    color: var(--accent-color-grean);
  }
`;

export const CheckboxTextExpense = styled(CheckboxText)`
  margin-left: 20px;
  ${CheckboxInput}:not(:checked) ~ & {
    color: var(--accent-color-red);
  }
`;
export const SumAndDateWrapp = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const SumWrap = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: bottom;
  overflow: visible;
  position: relative;
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const DateWrap = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--disabled-grey-text-color);
  position: relative;
  transition: border 250ms linear;
  &:focus,
  &:hover {
    border-bottom: 1px solid var(--accent-color-blue);
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const DatetimeInput = styled.input`
  ${InputStyle}
  padding: 0;
  text-align: left;
  outline: none;
  font-size: 18px;
  line-height: 1.47;
  border: 0;
  &:focus,
  &:hover {
    border-bottom: none;
  }
  width: 260px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const CalendarWrap = styled.div`
  width: 24px;
  height: 24px;
  pointer-events: none;
  position: absolute;
  right: 20px;
`;

export const SumField = styled(Field)`
  ${InputStyle}
  display: block;
  position: static;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.47;
  // @media screen and (max-width: 767px) {
  //   margin-bottom: 40px;
  // }
  @media screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
    margin-right: 30px;
    padding: 0 0 0 5px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const TextAreaWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;
`

export const Textarea = styled.textarea`
  ${InputStyle}
  box-sizing: border-box;
  //margin-bottom: 40px;
  resize: none;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 10px;
  position: absolute;
  //top: 30px;
  left: 0px;
  bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
