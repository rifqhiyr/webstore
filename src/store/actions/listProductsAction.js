import axios from "axios";

export const createProduct = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://ecommerce-mp.herokuapp.com/product/create",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "CREATE_PRODUCT",
      payload: res.data
    });
  } catch (error) {
    console.log("error", error.response.data);
  }
};

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

export const getProductDetail = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://ecommerce-mp.herokuapp.com/product/one/${id}`
    );
    console.log("get by id", res.data);
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: res.data
    });
  } catch (error) {
    console.log("test", error.response);
  }
};

export const showCart = () => async dispatch => {
  try {
    const res = await axios.get(
      `https://ecommerce-mp.herokuapp.com/cart/get-all`
    );
    console.log(res.data);
    dispatch({
      type: "SHOW_CART",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteCart = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://ecommerce-mp.herokuapp.com/cart/${id}`
    );
    console.log(res.data);
    console.log(id);
    dispatch({
      type: "DELETE_CART",
      payload: id
    });
  } catch (error) {
    console.log(error.response);
  }
};
