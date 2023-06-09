import PropTypes from 'prop-types';
import React from 'react';
import { HiOutlineXMark, HiOutlineFaceFrown } from 'react-icons/hi2';

import { useCart } from '../../hooks/CartContext';
import { themes } from '../../styles/theme';

import { ButtonComponent, ResumeCart, Title } from '..';

import CupomInput from '../InputCupom';
import * as S from './styles';
export const CartComponent = () => {
  const { DeleteCard, cart } = useCart();

  if (cart.length > 0) {
    return (
      <>
        <S.Container>
          <S.ContainerItemCart>
            <Title marginTop={'15px'} color={themes.colors.default_color}>
              Carrinho
            </Title>
            {cart.map(hq => (
              <S.ContainerItem key={hq.id}>
                <div className="itens">
                  <S.Image
                    src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                    alt={hq.title}
                  />
                  <S.TitleHq>{hq.title}</S.TitleHq>
                  <ButtonComponent
                    onClick={() => DeleteCard(hq.id)}
                    backgroundColor={'transparent'}
                  >
                    <div className="divDeleteIten">
                      <HiOutlineXMark color="red" />
                    </div>
                  </ButtonComponent>
                </div>
              </S.ContainerItem>
            ))}
          </S.ContainerItemCart>
          <S.Checkout>
            <ResumeCart />
            <CupomInput />
          </S.Checkout>
        </S.Container>
      </>
    );
  } else {
    return (
      <>
        <S.Container>
          <S.ContainerItemCart>
            <Title marginTop={'15px'} color={themes.colors.default_color}>
              Carrinho
            </Title>
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

CartComponent.propTypes = {
  cart: PropTypes.array,
};
