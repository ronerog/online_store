import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ListProducts } />
      <Route exact path="/cart" component={ ShoppingCart } />
      <Link to="/cart" data-testid="shopping-cart-button" > Carrinho </Link>

    </BrowserRouter>
  );
}

export default App;
