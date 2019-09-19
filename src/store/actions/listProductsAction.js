import axios from "axios";

export const getProduct = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://ecommerce-mp.herokuapp.com/product/get-all"
    );
    console.log(res.data);
    dispatch({
      type: "GET_PRODUCT",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
