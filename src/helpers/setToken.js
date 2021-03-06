import axios from "axios";

const setToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.headers.common["Authorization"];
  }
};

export default setToken;
