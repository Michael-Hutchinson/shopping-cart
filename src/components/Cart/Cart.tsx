import React from 'react';
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../models/cart.model';
import { Wrapper } from './Cart.styles';

interface ICartProps {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FunctionComponent<ICartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <p>Test</p>
  </Wrapper>
);

export default Cart;
