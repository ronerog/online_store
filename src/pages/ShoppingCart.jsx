import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  state = {
    stateCart: '',
  };

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem('cart'));
    this.setState({ stateCart: item });
  };

  render() {
    const { stateCart } = this.state;
    // const { title, price, thumbnail, id } = stateCart;

    return (
      <section>
        <Link to="/"> Página Inicial </Link>
        {/* passar no valor de zero o valor do array.lenght */}
        <h1>Carrinho de Compras</h1>
        { (stateCart.length)
          ? (stateCart.map((item) => (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{ item.title }</p>
              <p>{ item.price }</p>
              <img src={ item.thumbnail } alt={ item.title } />
              <button
                data-testid="shopping-cart-product-quantity"
                type="button"
              >
                {stateCart.filter((qt) => qt.id === item.id).length}

              </button>
            </div>)))
          : (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}

      </section>
    );
  }
}

ShoppingCart.propTypes = {
};
export default ShoppingCart;
