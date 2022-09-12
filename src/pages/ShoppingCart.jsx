import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail, id } = state;
    // const { handleAddCartClick } = this.props;

    return (
      <section>
        <Link to="/"> Página Inicial </Link>
        {/* passar no valor de zero o valor do array.lenght */}
        <p
          data-testid="shopping-cart-product-quantity"
        >
          itens adicionados ao carrinho:0

        </p>
        <h1>Carrinho de Compras</h1>
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
          <button type="button">0</button>
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
