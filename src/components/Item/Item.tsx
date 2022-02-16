import React from 'react';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../../models/cart.model';
import { Wrapper } from './Item.styles';

interface IItemProps {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FunctionComponent<IItemProps> = ({
  item,
  handleAddToCart,
}) => (
  <>
    <div>Test</div>
    <p>Test P</p>
  </>
);

export default Item;
