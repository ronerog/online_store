import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { location: { state }} = this.props;
    console.log(state);
    // const { title, price, img, id } = this.props;
    return (
      <div data-testid="product" key={ id }>
        {/* <p data-testid="product-detail-name">{title}</p>
        <p data-testid="product-detail-price">{price}</p>
        <img data-testid="product-detail-image" src={ img } alt={ title } />
        <Link to="/cart" data-testid="shopping-cart-button">
          {' '}
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ () => id }
          >
            Adicionar ao carrinho
          </button>
        </Link> */}
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
