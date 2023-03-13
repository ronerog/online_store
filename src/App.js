import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import ListProducts from './pages/ListProducts';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import ProductCard from './pages/ProductCard';

function App() {
  return (
    <BrowserRouter>
      <Link data-testid="shopping-cart-button" to="/cart"> Carrinho de compras </Link>
      <Route exact path="/" component={ ListProducts } />
      <Route exact path="/cart" component={ ShoppingCart } />
      <Route exact path="/ProductCard" component={ ProductCard } />

    </BrowserRouter>
  );
}

export default App;
