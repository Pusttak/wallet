import Media from 'react-media';
import { Currency } from 'components/currency/currency';

export const CurrencyPage = () => {
  return (
    <>
      <Media query="(max-width: 767px)" render={() => <Currency />} />
    </>
  );
};
