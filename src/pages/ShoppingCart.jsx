import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  state = {
    stateCart: [],
    quantidades: {},
  };

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    this.setState({ stateCart: item });
  };

  // handleDecrease = (menos) => {
  //   const item = JSON.parse(localStorage.getItem('cart')) || [];
  //   const test1 = item.filter((qt) => qt.id !== menos.id).length;
  //   this.setState({ stateCart: test1 });
  // };

  handleIncrease = (mais) => {
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    const quantidade = item.filter((qt) => qt.id === mais.id).length;
    const soma = quantidade + 1;
    const { id } = mais;
    this.setState(({ quantidades: prevQuantidades }) => ({
      quantidades: { [id]: soma, ...prevQuantidades },
    }));
  };

  handleRemove = (obj) => {
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    const filter = item.filter((e) => e.id !== obj.id);
    localStorage.setItem('cart', JSON.stringify(filter));
    this.handleLocalStorage();
  };

  render() {
    const { stateCart, quantidades } = this.state;

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
              <button
                type="button"
                // onClick={ () => this.handleDecrease(item.id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">
                {quantidades[item.id]}
              </p>
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
