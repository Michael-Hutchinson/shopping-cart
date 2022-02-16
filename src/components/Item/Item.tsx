import React from 'react';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../../models/cart.model';
import { Wrapper } from './Item.styles';

interface IItemProps {
  item: CartItemType;
}

const Item: React.FunctionComponent = () => (
  <>
    <div>Test</div>
    <p>Test P</p>
  </>
);

export default Item;
