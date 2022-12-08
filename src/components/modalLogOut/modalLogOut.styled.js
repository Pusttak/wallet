import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: var(--primary-background-color);
  z-index: 10;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    padding-top: 60px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
    min-height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 450px;
    min-height: 200px;
    border-radius: 20px;
  }
`;

export const ModalButton = styled.button`
  display: block;
  margin: 20px;
  width: 90px;
  height: 40px;
  background: var(--primary-background-color);
  border: 1px solid var(--accent-color-blue);
  border-radius: 20px;
  line-height: 1.5;
  text-align: center;
  font-family: 'Poppins';
  font-size: 26px;
  color: 'var(--accent-color-blue)';
  &:hover {
    box-shadow: 0px 0px 5px var(--accent-color-grean);
  }
  &:active {
    background: #24cca7;
    border-radius: 20px;
    border: transparent;
    color: var(--primary-background-color);
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 100%;
  border: 1px solid var(--accent-color-blue);
  background-color: var(--primary-background-color);
  &:hover {
    box-shadow: 0px 0px 5px var(--accent-color-grean);
  }
`;
export const TextModal = styled.div`
  margin: 0 0 20px;
  height: 40px;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
`;
