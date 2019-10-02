const initialState = {
  cartProducts: [],
  allTotal: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "SHOW_CART":
      return {
        ...state,
        ...payload,
        cartProducts: payload.result.cart,
        allTotal: payload.result.total_price
      };
    case "DELETE_CART":
      return {
        ...state,
        ...payload,
        cartProducts: state.cartProducts.filter(cart => cart._id !== payload)
      };
    default:
      return state;
  }
}
