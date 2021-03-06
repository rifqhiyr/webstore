const initialState = {
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
    case "CREATE_PRODUCT":
      return {
        ...state,
        ...payload,
        products: [...state.products, payload]
      };
    default:
      return state;
  }
}
