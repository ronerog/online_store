import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductCard from './pages/ProductCard';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ListProducts } />
      <Route exact path="/cart" component={ ShoppingCart } />
      <Route exact path="/ProductCard" component={ ProductCard } />
      <Link data-testid="shopping-cart-button" to="/cart"> Carrinho </Link>

    </BrowserRouter>
  );
}

export default App;
