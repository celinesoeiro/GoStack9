import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ShoppingList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      // Toda action precisa de um type
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <ShoppingList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ShoppingList>
    );
  }
}

export default connect()(Home);
