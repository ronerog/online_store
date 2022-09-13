import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  state = {
    stateCart: [],
  };

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ stateCart: item });
  };

  handleDecrease = (product) => {
    const { stateCart } = this.state;
    const index = stateCart.findIndex((idx) => idx.id === product.id);
    const newArr = [...stateCart];
    newArr[index].quantity -= 1;
    this.setState({ stateCart: newArr });
  };

  handleIncrease = (product) => {
    const { stateCart } = this.state;
    const index = stateCart.findIndex((idx) => idx.id === product.id);
    const newArr = [...stateCart];
    newArr[index].quantity += 1;
    this.setState({ stateCart: newArr });
  };

  handleRemove = (obj) => {
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    const filter = item.filter((e) => e.id !== obj.id);
    localStorage.setItem('cart', JSON.stringify(filter));
    this.handleLocalStorage();
  };

  render() {
    const { stateCart } = this.state;

    return (
      <section>
        <Link to="/"> Página Inicial </Link>

        <h1>Carrinho de Compras</h1>
        {stateCart.length > 0 ? (
          stateCart.map((item) => (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p>{item.price}</p>
              <img src={ item.thumbnail } alt={ item.title } />

              <p data-testid="shopping-cart-product-quantity">
                {item.quantity}
              </p>

              <button
                type="button"
                onClick={ () => this.handleDecrease(item) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>

              <button
                type="button"
                onClick={ () => this.handleIncrease(item) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <div>
                <button
                  type="button"
                  onClick={ () => this.handleRemove(item) }
                  data-testid="remove-product"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </section>
    );
  }
}

ShoppingCart.propTypes = {};
export default ShoppingCart;
