import { TransactionsTable } from 'components/transactionTable/transactionTable';
import AddTransactionButton from 'components/addTransaction/addTransactionButton/addTransactionButton';
import Balance from 'components/balance/balance';
import Media from 'react-media';
import { HomeWrapper } from './homeTab.styled';

export const HomeTab = () => {
  return (
    <HomeWrapper>
      <Media query="(max-width: 767px)" render={() => <Balance />} />
      <TransactionsTable />
      <AddTransactionButton />
    </HomeWrapper>
    
  );
};

export default HomeTab;
