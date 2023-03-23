import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { ButtonComponent } from '../ButtonComponent';
import * as S from './styles';
import 'react-toastify/dist/ReactToastify.css';

const CupomInput = () => {
  const [cupom, setCupom] = useState('');
  const [cupomRaro, setCupomRaro] = useState('');

  const handleInputChange = event => {
    setCupom(event.target.value);
    setCupomRaro(event.target.value);
  };

  const handleCupomSubmit = event => {
    event.preventDefault();
    if (cupom === 'neoapp10' || cupomRaro === 'neoapp10raro') {
      toast.success('Cupom válido!');
    } else {
      toast.error('Cupom inválido!');
    }
  };

  return (
    <S.Form onSubmit={handleCupomSubmit}>
      <label>
        <S.InputCupon
          type="text"
          value={cupom}
          placeholder="Insira seu cumpom aqui"
          onChange={handleInputChange}
        />
      </label>
      <ButtonComponent
        backgroundColor={'rgb(58, 186, 238)'}
        Width={'180px'}
        Height={'32px'}
        Color={'white'}
        type="submit"
      >
        Aplicar
      </ButtonComponent>
    </S.Form>
  );
};

export default CupomInput;
