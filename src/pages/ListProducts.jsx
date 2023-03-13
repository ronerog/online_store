import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import './ListProducts.css';
import './ProductCard.css';

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
    const exist = storageProduct.some((item) => item.id === element.id);
    if (!exist) {
      const products = [...storageProduct, element];
      localStorage.setItem('cart', JSON.stringify(products));
    } else {
      const newStorage = storageProduct.map((item) => {
        if (item.id === element.id) {
          item.quantity += 1;
        } return item;
      });
      localStorage.setItem('cart', JSON.stringify(newStorage));
    }
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
                  className="product-card"
                >
                  <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
                  <img src={ item.thumbnail } alt={ item.title } />
                  <p>{item.price}</p>
                  <button
                    data-testid="product-add-to-cart"
                    type="button"
                    onClick={ () => this.handleAddCartClick(item) }
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </Link>

            </div>
          )))
            : <h3>Nenhum produto foi encontrado</h3> }

        </div>
      </section>
    );
  }
}
