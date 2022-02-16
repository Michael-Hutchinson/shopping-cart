import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper } from './App.styles';
import { CartItemType } from './models/cart.model';

const getProducts = async (): Promise<CartItemType[]> =>
  (await fetch('https://fakestoreapi.com/products')).json();

const App: React.FunctionComponent = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;
  return <p>Hello</p>;
};

export default App;
