import { combineReducers, createStore } from "redux";
import cartReducer from "./cart/cartReducer";
import wishlistReducer from "./wishlist/wishlistReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
});
const store = createStore(rootReducer);

export default store;
