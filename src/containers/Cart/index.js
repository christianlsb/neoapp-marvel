import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Header, Title } from '../../components';
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
        <Title>Carrinho</Title>
        <S.ContainerItemCart>
          {cart.map(item => (
            <S.ContainerItem key={item.id}>
              <div className="itens">
                <img
                  style={{ width: '65px', height: '80px' }}
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </S.ContainerItem>
          ))}
        </S.ContainerItemCart>
        <S.InputCupon placeholder="Insira seu cupom" />
      </S.Container>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};
