import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 30px;
    margin-left: 138px;
  }

  h2 {
    width: 100%;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }

  p {
    @media screen and (max-width: 767px) {
      margin-bottom: 16px;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-left: auto;
  }
`;

export const StatisticsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: end;
    margin-left: auto;
    min-width: 704px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 715px;
  }
`;
