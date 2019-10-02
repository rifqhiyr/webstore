const initialState = {
  productById: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        ...payload,
        productById: payload.result
      };
    default:
      return state;
  }
}
