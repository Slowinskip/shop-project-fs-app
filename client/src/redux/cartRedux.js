import shortid from 'shortid';
//selectors
export const getCart = ({ cart }) => cart;
// actions
const createActionName = (actionName) => `app/products/${actionName}`;
const ADD_CART = createActionName('ADD_AD');
// action creators
export const addCart = (payload) => ({ type: ADD_CART, payload });

const cartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...statePart, { ...action.payload, _id: shortid() }];
    default:
      return statePart;
  }
};
export default cartReducer;
