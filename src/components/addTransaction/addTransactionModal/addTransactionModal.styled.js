import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    background-color: var(--primary-background-color);
  }
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--primary-background-color);
  padding: 20px 0 55px 0;
  min-height: 585px;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 540px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
    width: 500px;
    border-radius: 20px;
  }
`;

export const TransactionFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0 auto;
  min-width: 300px;
  min-height: 50px;
  padding: 0;
  border-radius: 20px;
  border: ${props =>
    props.primary
      ? '1px solid var(--accent-color-grean)'
      : '1px solid var(--accent-color-blue)'};
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  background-color: ${props =>
    props.primary ? 'var(--accent-color-grean)' : 'transparent'};
  color: ${props =>
    props.primary ? 'var(--secondary-text-color)' : 'var(--accent-color-blue)'};
  transition: background-color 250ms linear;

  &:hover {
    background-color: ${props =>
      props.primary ? '#20b091' : 'var(--secondary-background-color)'};
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 100%;
  background-color: var(--primary-background-color);
  border: 0;
  transition: box-shadow 250ms linear;
  &:hover {
    box-shadow: 0px 0px 5px var(--accent-color-grean);
  }
`;
