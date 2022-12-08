import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  max-width: 320px;
  overflow: hidden scroll;

  text-align: center;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 704px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 715px;
    max-height: 65vh;
    margin-left: 69px;
  }
`;

export const TableHead = styled.tr`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 27px;
  height: 58px;
  padding: 0px 7.5px;
  border-radius: 30px;
  background-color: white;
`;

export const TableHeadItem = styled.th`
  padding: 10px;

  width: 50px;
  &:nth-child(1) {
    margin-right: 45px;
  }
  &:nth-child(2) {
    margin-right: 40px;
  }
  &:nth-child(3) {
    margin-right: 85px;
  }
  &:nth-child(4) {
    margin-right: 125px;
  }
  &:nth-child(5) {
    margin-right: 43px;
  }
`;

export const Data = styled.tr`
  position: relative;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  padding: 0px 7.5px;
  font-size: 16px;
  line-height: 24px;
  min-height: 52px;
  &:not(:last-child) {
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 10;
      bottom: 0;
      width: 680px;
      border: 1px solid #dcdcdf;
      box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const DataItem = styled.td`
  padding: 8px 10px;

  color: var(--primary-text-color);
  font-weight: 400;
  font-size: 16px;
  @media screen and (min-width: 320px) {
    &:nth-child(1) {
      width: 70px;
      margin-right: 10px;
    }
    &:nth-child(2) {
      width: 80px;
      margin-right: 25px;
    }
    &:nth-child(3) {
      width: 80px;
      margin-right: 60px;
    }
    &:nth-child(4) {
      width: 100px;
      margin-right: 50px;
    }
    &:nth-child(5) {
      width: 80px;
      margin-right: 10px;
    }
    &:nth-child(6) {
      width: 90px;
      margin-left: 25px;
    }
  }
`;

export const DataComment = styled.span`
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
`;

export const DataSum = styled.span`
  color: ${props =>
    props.type === 'true'
      ? 'var(--accent-color-grean)'
      : 'var(--accent-color-red)'};
`;

export const DataMob = styled.ul`
  width: 290px;
  padding: 12px 20px;

  border-radius: 10px;
  border-left: 5px solid
    ${props =>
      props.type === 'true'
        ? 'var(--accent-color-grean)'
        : 'var(--accent-color-red)'};
  &:not(:last-child) {
    margin: 0 auto 8px;
  }
  background: #ffffff;
`;

export const HeadItemMob = styled.span`
  display: block;
  text-align: end;
  max-width: 110px;

  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const DataItemMob = styled.li`
  display: flex;
    flex-grow: 1;    
    align-items: center;
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  justify-content: space-between;  
  height: 47px;
  line-height: calc(24 / 16);
  ;
`;
