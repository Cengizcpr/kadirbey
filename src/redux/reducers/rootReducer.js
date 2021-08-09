import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import carReducer from "./carReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  carData: carReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer
});

export default rootReducer;
