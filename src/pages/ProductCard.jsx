import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { title, price, thumbnail, id } = state;
    return (
      <div key={ id }>
        <p data-testid="product-detail-name">{ title }</p>
        <p data-testid="product-detail-price">{ price }</p>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Adicionar ao carrinho
          </button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProductCard;
