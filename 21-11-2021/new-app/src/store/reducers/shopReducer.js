import {SOAP_SELL, SOAP_BUY} from "../actions";

const shopReducer = (state = { soap: 10 }, action) => {
    if (action.type === SOAP_SELL) {
        // return state.soap-- // INCORRECT WAY
        return {
            soap: state.soap - 1
        };
    }
    if (action.type === SOAP_BUY) {
        return {
            soap: state.soap + action.payload
        };
    }
    return state;
};

export default shopReducer;