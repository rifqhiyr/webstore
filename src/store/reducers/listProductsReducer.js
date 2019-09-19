const initialState = {
  // product: null,
  products: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT":
      return {
        ...state,
        ...payload,
        products: payload.result
      };
    default:
      return state;
  }
}
