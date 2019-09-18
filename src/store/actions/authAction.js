import axios from "axios";

export const register = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://ecommerce-mp.herokuapp.com/user/register",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log("error", error.response.data);
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data
    });
  }
};

export const login = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://ecommerce-mp.herokuapp.com/user/login",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data
    });
  }
};
