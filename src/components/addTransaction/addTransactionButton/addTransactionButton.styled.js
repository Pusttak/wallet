import styled from 'styled-components';

export const TransactionButton = styled.button`
  width: 44px;
  height: 44px;
  z-index: 2;
  background-color: #24cca7;
  color: #ffffff;
  padding: 12px;
  border-radius: 100%;
  border: 0;
  box-shadow: 0 10px 10px -7px #24cca7;
  transition: background-color 250ms linear;
  position: fixed;
  right: 20px;
  bottom: 20px;

  @media (max-width: 768px) {
    position: sticky;
    bottom: 20px;
    left: 90vw;
  }
  @media (min-width: 768px) {
    position: fixed;
    bottom: 40px;
    right: 40px;
  }
  &:hover {
    background-color: #20b091;
  }
`;
