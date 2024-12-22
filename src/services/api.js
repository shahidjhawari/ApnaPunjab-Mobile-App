export const BASE_URL = 'http://192.168.100.100:5000/api';

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  return response.json();
};

export const getProductsByCategory = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/products?category=${categoryId}`);
  return response.json();
};
