import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ShoppingList } from './styles';

export default function Home() {
  return (
    <ShoppingList>
      <li>
        <img
          src="https://i.pinimg.com/564x/d1/17/47/d117478237858686de3776c229c22833.jpg"
          alt="Bota estrelada"
        />
        <strong>Bota de couro com detalhes bordados</strong>
        <span>200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ShoppingList>
  );
}
