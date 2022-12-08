import React from 'react';
import sprite from '../../images/svg/symbol-defs.svg';
import './logo.scss';

const Logo = () => {
  return (
    <svg className="Logo">
      <use href={`${sprite}#icon-wallet`} />
    </svg>
  );
};

export default Logo;
