export function addToCart(product) {
  return {
    // Toda action precisa de um type
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
