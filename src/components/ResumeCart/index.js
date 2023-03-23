import React, { useState } from 'react';

import formatCurrency from '../../utils/formatCurrency';
import * as S from './styles';
export const ResumeCart = () => {
  const [valueItens] = useState(0);
  const [taxValue] = useState(15);

  return (
    <>
      <S.ResumeCart>
        <h1>Resumo</h1>
        <p>Valor dos itens: {formatCurrency(valueItens)}</p>
        <p>Valor de entrega: {formatCurrency(taxValue)}</p>
        <p>Valor total: {formatCurrency(valueItens + taxValue)}</p>
        <p></p>
      </S.ResumeCart>
    </>
  );
};
