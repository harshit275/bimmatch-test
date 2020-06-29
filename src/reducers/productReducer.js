export const ADD_PRODUCT = "ADD_PRODUCT";
export const LIST_PRODUCT = "LIST_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProduct = (id, product, state) => {
  console.log("Adding product: ", product);
  state.forEach(element => {
    if (element.id !== id) {
      product = { ...product, id: id };
      state = [...state, product];
    }
  });
  return state;
};

const removeProduct = (productId, state) => {
  console.log("Removing product: ", productId);
  state = state.filter(element => element.id !== productId);
  return state;
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(action.id, action.product, state);
    case LIST_PRODUCT:
      return action.products;
    case REMOVE_PRODUCT:
      return removeProduct(action.productId, state);
    default:
      return state;
  }
};
