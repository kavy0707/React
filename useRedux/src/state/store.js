import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer"; // Ensure the import is correct

export const store = configureStore({
    reducer: rootReducer, // Use the combined reducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});