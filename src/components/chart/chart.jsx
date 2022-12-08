import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, ChartBalInfo } from './chart.styled';

ChartJS.register(ArcElement, Tooltip);

export function Chart({ statistics }) {
  const { totalExpenses, totalCategories } = statistics;
  const data = {
    labels: totalCategories.map(category => category.title),
    datasets: [
      {
        label: 'Statistics',
        data: totalCategories.map(category =>
          category.total ? category.total : 0
        ),
        backgroundColor: totalCategories.map(category => category.color),
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };
  return (
    <>
      <ChartWrapper>
        <Doughnut data={data} />
        <ChartBalInfo>{` ₴ ${totalExpenses}`}</ChartBalInfo>
      </ChartWrapper>
    </>
  );
}
