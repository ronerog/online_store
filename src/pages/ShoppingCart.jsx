import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail, id } = state;
    // const { item } = this.state;

    return (
      <section>
        <Link to="/"> Página Inicial </Link>
        <h1>Carrinho de Compras</h1>
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
          {/*  <button
            type="button"
            onClick={ this.handleAddCartClick(item) }
          >
            localStorage

          </button> */}
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default ShoppingCart;
