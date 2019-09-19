import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listProductsReducer from "./listProductsReducer";

export default combineReducers({
  authReducer,
  listProductsReducer
});
