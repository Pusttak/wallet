import styled from 'styled-components';

export const DashboardContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    gap: 32px;
    padding-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    padding-top: 40px;
    padding-bottom: 47px;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 0px;
      // height: calc(100vh - 60px);
      left: 463px;
      top: 0;
      bottom: 0;

      border: 1px solid #e7e5f2;
      box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
        1px 0px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;
