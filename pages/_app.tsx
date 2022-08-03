import React, { useState } from 'react';
import type { AppProps } from 'next/app';

import { BasketProduct, Product } from './types';
import { Basket } from '../components/Basket';

import '../styles/globals.css';

interface IBasketState {
  basket?: Array<BasketProduct>;
  addToCart: (p: Product) => () => void;
  toggleBasketModal: () => void;
}

export const BasketContext = React.createContext<IBasketState>({
  addToCart: () => () => {},
  toggleBasketModal: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [basket, setBasket] = useState<Array<BasketProduct>>([]);
  const [basketVisible, setBasketVisible] = useState<boolean>(false);

  const addToCart =
    ({ id, name, price }: Product) =>
    () => {
      let existingIndex = basket.findIndex((item) => {
          return item.productId == id
        })

      if (existingIndex === -1){
        setBasket([...basket, { productId: id, name, price, quantity: 1 }]);
      }
      else {
        let newBasket = basket;
        newBasket[existingIndex].quantity++
        setBasket([...newBasket])
      }
    };

  const toggleBasketModal = () => setBasketVisible(!basketVisible);

  return (
    <BasketContext.Provider value={{ basket, addToCart, toggleBasketModal }}>
      <Component {...pageProps} />
      {basketVisible && <Basket />}
    </BasketContext.Provider>
  );
}

export default MyApp;
