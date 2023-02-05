//selectors

import { API_URL } from '../config';

export const getProducts = ({ products }) => products;
export const getProductsMen = ({ products }) =>
  products.filter((product) => product.category === 'MEN');

export const getProductsWomen = ({ products }) =>
  products.filter((product) => product.category === 'WOMAN');

// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const UPDATE_PRODUCTS = createActionName('UPDATE_PRODUCTS');
// action creators
export const updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });

const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default productsReducer;
