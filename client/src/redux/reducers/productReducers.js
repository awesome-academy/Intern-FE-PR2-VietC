import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { pending: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { pending: false, products: action.payload };
    case PRODUCT_LIST_FAILURE:
      return { pending: false, error: action.payload };
    default:
      return state;
  }
};
