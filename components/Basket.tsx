import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { BasketContext } from '../pages/_app';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 50%);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
`;

const BasketTitle = styled.h3`
  margin: 0.5em 0;
`;

const BasketItem = styled.div`
  width: 100%;
  clear: both;

  padding-bottom: 2em;
  border-top: 1px solid grey;
  vertical-align: center;
  line-height: 2em;

  &:last-child {
    border-bottom: 1px solid grey;
  }
`;

const BasketItemDetails = styled.div`
  float: left;
`;

const BasketItemPrice = styled.div`
  float: right;
`;

export const Basket = () => {
  const { basket, toggleBasketModal } = useContext(BasketContext);

  useEffect(()=>{console.log(basket)},[basket])

  return (
    <Background onClick={toggleBasketModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <BasketTitle>Basket</BasketTitle>
        {basket?.map(({ name, price, quantity }, key) => (
          <BasketItem key={key}>
            <BasketItemDetails>
              {quantity} x {name}
            </BasketItemDetails>
            <BasketItemPrice>&pound;{(price / 100).toFixed(2)}</BasketItemPrice>
          </BasketItem>
        ))}
      </Container>
    </Background>
  );
};
