import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  state = {
  };

  handleAddtoCart = (element) => {
    const storageProduct = JSON.parse(localStorage.getItem('cart')) || [];
    const products = [...storageProduct, element];
    localStorage.setItem('cart', JSON.stringify(products));
  };

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
        >
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleAddtoCart(state) }
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
