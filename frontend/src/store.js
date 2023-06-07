import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAllPizzaReducer } from "./reducers/PizzaReducer";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import { placeOrderReducer } from "./reducers/orderReducers";

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const inititalState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
