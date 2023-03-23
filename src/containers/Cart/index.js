import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { HiOutlineXMark, HiOutlineFaceFrown } from 'react-icons/hi2';

import { Button, Header, Title } from '../../components';
import * as S from './styles';

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const DeleteCard = id => {
    const updatedCart = cart.filter(task => task.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length > 0) {
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
                  <Button
                    onClick={() => DeleteCard(hq.id)}
                    backgroundColor={'transparent'}
                  >
                    <HiOutlineXMark color="red" size={25} />
                  </Button>
                </div>
              </S.ContainerItem>
            ))}
          </S.ContainerItemCart>
        </S.Container>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <S.Container>
          <S.ContainerItemCart>
            <Title>Carrinho</Title>
            <S.ContainerEmpaty>
              <HiOutlineFaceFrown size={50} color={'red'} />
              <p>O carrinho está vázio</p>
            </S.ContainerEmpaty>
          </S.ContainerItemCart>
        </S.Container>
      </>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.array,
};
