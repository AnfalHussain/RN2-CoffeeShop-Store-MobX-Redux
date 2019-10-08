import { combineReducers } from "redux";

// Reducers
import cartReducer from "./cartReducer";
import coffeeReducer from "./coffeeReducer";

export default combineReducers({
    items: cartReducer,
    rootCoffee: coffeeReducer,

});
