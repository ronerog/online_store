export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const categories = await response.json();
  console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let url = '';
  if (!categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else if (!query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  } else {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}}&q=${query}`;
  }
  const response = await fetch(url);
  const searchProducts = await response.json();
  return searchProducts;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
