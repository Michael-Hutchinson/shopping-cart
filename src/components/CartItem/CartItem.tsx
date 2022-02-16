import React from 'react';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../../models/cart.model';
import { Wrapper } from './CartItem.styles';

interface ICartItemProps {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <p>Test</p>
  </Wrapper>
);

export default CartItem;
