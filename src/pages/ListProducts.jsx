import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange = async () => {
    const listOfProducts = await getCategories();
    console.log(listOfProducts);
    this.setState({
      data: listOfProducts,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <section>
        <input type="text" value="" />
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
                  onChange={ this.handleChange }
                >
                  { list.name }
                </button>
              </li>
            ))}
            ;
          </ul>
        </div>
      </section>
    );
  }
}
