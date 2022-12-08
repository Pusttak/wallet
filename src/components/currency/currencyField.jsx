import React from 'react';
import {
  CurrencyFieldWrap,
  CurrencyFieldContainer,
  CurrencyFieldItem,
} from './currency.styled';

export const CurrencyField = ({ currency, purchaseValue, saleValue }) => {
  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  }

  const sale = minTwoDigits(saleValue.toFixed(2));
  const purchase = minTwoDigits(purchaseValue.toFixed(2));
  return (
    <CurrencyFieldWrap>
      <CurrencyFieldContainer>
        <CurrencyFieldItem>{currency}</CurrencyFieldItem>
        <CurrencyFieldItem>{purchase}</CurrencyFieldItem>
        <CurrencyFieldItem>{sale}</CurrencyFieldItem>
      </CurrencyFieldContainer>
    </CurrencyFieldWrap>
  );
};
