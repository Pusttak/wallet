import { useSelector } from 'react-redux';
import { Chart } from 'components/chart/chart';
import { Table } from 'components/table/table';
import {
  StatisticsContainer,
  TableContainer,
  StatisticsWrapper,
} from './diagramTab.styled';
import { Selectors } from 'components/selectors/selectors';

export function DiagramTab() {
  const statistics = useSelector(state => state.userInformation.financeData);

  return (
    <>
      <StatisticsContainer>
        <h2>Statistics</h2>
        <StatisticsWrapper>
          {statistics && (
            <>
              {statistics?.totalIncome || statistics?.totalExpenses ? (
                statistics?.totalExpenses ? (
                  <Chart statistics={statistics} />
                ) : (
                  <p>
                    There are no expenses
                    <br /> in the selected period
                  </p>
                )
              ) : null}
            </>
          )}
          <TableContainer>
            <Selectors />
            <Table statistics={statistics} />
          </TableContainer>
        </StatisticsWrapper>
      </StatisticsContainer>
    </>
  );
}

export default DiagramTab;
