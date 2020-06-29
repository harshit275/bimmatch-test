import React, { useReducer } from "react";

import ProductContext from "../context/product-context";
import firebase from "../config/config";
import {
  productReducer,
  ADD_PRODUCT,
  LIST_PRODUCT,
  REMOVE_PRODUCT
} from "../reducers/productReducer";

const GlobalState = props => {
  let today = new Date();
  const [state, dispatch] = useReducer(productReducer, []);
  const ref = firebase.firestore().collection(`products`);

  const addProduct = product => {
    product = {
      ...product,
      creatorId: props.user.uid,
      createdBy: props.user.email,
      createdAt: today.toUTCString()
    };
    ref
      .add(product)
      .then(docRef => {
        dispatch({ type: ADD_PRODUCT, id: docRef.id, product: product });
      })
      .catch(e => {
        console.log(e);
      });
  };

  const listProduct = () => {
    let products = [];
    ref
      .where("creatorId", "==", props.user.uid)
      .get()
      .then(snap => {
        if (snap) {
          snap.forEach(element => {
            products.push({ id: element.id, ...element.data() });
          });
        }
      })
      .then(() => {
        dispatch({ type: LIST_PRODUCT, products: products });
      })
      .catch(e => {
        console.log(e);
      });
  };

  const removeProduct = productId => {
    ref
      .doc(productId)
      .delete()
      .then(() => {
        dispatch({ type: REMOVE_PRODUCT, productId: productId });
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state,
        addProduct: addProduct,
        listProduct: listProduct,
        removeProduct: removeProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default GlobalState;
