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
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: £{item.price}</p>
        <p>Total: £{(item.quantity * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.quantity}</p>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
