import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Button, Header, Title } from '../../components';
import * as S from './styles';

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerItemCart>
          <Title>Carrinho</Title>
          {cart.map(hq => (
            <S.ContainerItem key={hq.id}>
              <div className="itens">
                <img
                  style={{ width: '65px', height: '80px' }}
                  src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                  alt={hq.title}
                />
                <S.TitleHq>{hq.title}</S.TitleHq>
              </div>
            </S.ContainerItem>
          ))}
          <S.InputCupon placeholder="Insira seu cupom" />
          <Button
            backgroundColor={'blue'}
            Height="34px"
            Color={'white'}
            Width={'120px'}
          >
            Aplicar
          </Button>
        </S.ContainerItemCart>
      </S.Container>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};
