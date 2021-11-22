import {createStore} from "redux";
import shopReducer from "./reducers/shopReducer";

const store = createStore(shopReducer);

export default store;