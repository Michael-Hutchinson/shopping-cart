import React from 'react';
import CartItem from '../CartItem/CartItem';
import { CartItemType } from '../../models/cart.model';
import { Wrapper } from './Cart.styles';

interface ICartItemProps {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FunctionComponent<ICartItemProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <p>Test</p>
  </Wrapper>
);

export default Cart;
