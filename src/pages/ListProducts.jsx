import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      product: '',
      productList: '',
    };
  }

  componentDidMount() {
    this.handleList();
  }

  handleList = async () => {
    const listOfProducts = await getCategories();
    this.handleChange();
  }

  handleChange = async () => {
    const listOfProducts = await getCategories();
    console.log(listOfProducts);
    this.setState({
      data: listOfProducts,
    });
  };

  handleChange = async ({ target }) => {
    const { value } = target;
    // const { product } = this.state;
    this.setState({ product: value });
  };

  handleClick = async () => {
    const { product } = this.state;
    const searchProduct = await getProductsFromCategoryAndQuery(product);
    console.log(searchProduct);
    this.setState({
      productList: searchProduct,
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
            ))};
          </ul>
        </div>
      </section>
    );
  }
}
