import styled from 'styled-components';

export const Tabl = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  margin-bottom: 16px;
`;

export const TabHeader = styled.th`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding: 0 28px;

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const TableHead = styled.thead`
  border-radius: 30px;
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TableHeadTr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 27px;
  border-radius: 30px;
  height: 58px;
  background-color: var(--primary-background-color);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const Tabrow = styled.td`
  display: inline-flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px 15px 30px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
export const TotalExpenses = styled.span`
  color: #ff6596;
`;
export const TotalIncome = styled.span`
  color: #24cca7;
`;
export const TableBody = styled.tbody``;

export const BodyTr = styled.tr`
  padding: 0 28px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgb(255 255 255 / 60%);

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
`;
export const BodyText = styled.span`
  padding: 0 0px 0 16px;
  justify-content: space-between;
  display: flex;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
