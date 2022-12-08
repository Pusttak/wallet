import Media from 'react-media';
import Navigation from '../navigation/navigation';
import Balance from '../balance/balance';
import { DashboardContainer, Wrapper } from './dashboard.styled';
import { Currency } from '../currency/currency';

export const Dashboard = () => {
  return (
    <Wrapper>
      <DashboardContainer>
        <Navigation />
        <Media query="(min-width: 768px)" render={() => <Balance />} />
      </DashboardContainer>
      <Media
        query="(min-width: 768px)"
        render={() => <Currency />}
      />
    </Wrapper>
  );
};
