import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from './App.styles';
import { CartItemType } from './models/cart.model';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';

const getProducts = async (): Promise<CartItemType[]> =>
  (await fetch('https://fakestoreapi.com/products')).json();

const App: React.FunctionComponent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.quantity, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevState, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
