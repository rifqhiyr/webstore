import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listProductsReducer from "./listProductsReducer";
import listProductsDetailReducer from "./listProductsDetailReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  authReducer,
  listProductsReducer,
  listProductsDetailReducer,
  cartReducer
});
