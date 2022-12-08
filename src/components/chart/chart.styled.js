import styled from 'styled-components';
export const ChartWrapper = styled.div`
  width: 280px;
  height: 280px;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const ChartBalInfo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;
  line-height: calc(26 / 18);
  font-weight: 700;
`;
