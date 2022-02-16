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
    <h2>Shopping Cart</h2>
    {cartItems.length === 0 ? <p>Cart is empty</p> : null}
    {cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    ))}
  </Wrapper>
);

export default Cart;
