import { BalanceContainer, BalanceText, BalanceStyled } from './balance.styled';
import { useSelector } from 'react-redux';

const Balance = () => {
  let balance = useSelector(state => state.userInformation.user.balance);

  return (
    <BalanceContainer>
      <BalanceText>your balance</BalanceText>
      <BalanceStyled>
        &#8372; <b>{balance}</b>
      </BalanceStyled>
    </BalanceContainer>
  );
};

export default Balance;
