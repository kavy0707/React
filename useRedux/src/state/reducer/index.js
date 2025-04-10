import { combineReducers } from "redux";
import amountReducer from './amountreducers'; // Ensure the import is correct

const rootReducer = combineReducers({
    amount: amountReducer, // Ensure the key is "amount"
});

export default rootReducer; // Export the combined reducer object