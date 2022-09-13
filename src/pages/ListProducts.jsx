import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: '',
      productList: [],
    };
  }

  componentDidMount() {
    this.handleList();
  }

  handleList = async () => {
    const listOfProducts = await getCategories();
    this.setState({
      data: listOfProducts,
    });
  };

  handleChange = async ({ target }) => {
    const { value } = target;
    this.setState({ query: value });
  };

  handleClick = async ({ target: { id } }) => {
    const { query } = this.state;
    const searchProduct = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      productList: searchProduct.results,
    });
  };

  handleAddCartClick = (element) => {
    element.quantity = 1;
    const storageProduct = JSON.parse(localStorage.getItem('cart')) || [];
    const products = [...storageProduct, element];
    localStorage.setItem('cart', JSON.stringify(products));
  };

  render() {
    const { data, query, productList } = this.state;
    return (
      <section>
        <input
          type="text"
          value={ query }
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
                  id={ list.id }
                  onClick={ this.handleClick }
                >
                  {list.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>

          { (productList.length) ? (productList.map((item) => (
            <div key={ item.id }>
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: '/ProductCard',
                  state: item,
                } }
              >
                {' '}

                <div
                  data-testid="product"
                >
                  <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <p>{item.price}</p>
                </div>
              </Link>

              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ () => this.handleAddCartClick(item) }
              >
                Adicionar ao carrinho
              </button>

            </div>
          )))
            : <h3>Nenhum produto foi encontrado</h3> }

        </div>
      </section>
    );
  }
}
