import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <Link to="/"> Página Inicial </Link>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default ShoppingCart;
