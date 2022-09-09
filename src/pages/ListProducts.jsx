import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      product: '',
      productId: '',
      productList: [],
    };
  }

  componentDidMount() {
    this.handleList();
    this.handleClick();
  }

  handleList = async () => {
    const listOfProducts = await getCategories();
    this.setState({
      data: listOfProducts,
    });
  };

  handleChange = async ({ target }) => {
    const { value } = target;
    this.setState({ product: value });
  };

  handleClick = async () => {
    const { product, productId } = this.state;
    const searchProduct = await getProductsFromCategoryAndQuery(productId, product);
    this.setState({
      productList: searchProduct.results,
    });
  };

  render() {
    const { data, product, productList } = this.state;
    return (
      <section>
        <input
          type="text"
          value={ product }
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <ul>
            {data.map((list) => (
              <li key={ list.id }>
                <button
                  data-testid="category"
                  type="button"
                  id="cartegories"
                  onChange={ this.handleList }
                >
                  {list.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>

          { (productList.length) ? (productList.map((item) => (
            <div Key={ item.id } data-testid="product">
              <h2>{item.title}</h2>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{item.price}</p>
            </div>
          )))
            : <h3>Nenhum produto foi encontrado</h3> }

        </div>
      </section>
    );
  }
}
