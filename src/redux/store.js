import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["user",]
}

const rootReducer = combineReducers({
    user: useReducer,
}
)

export const store = configureStore({
    reducer: persistReducer,
});


export const persistedStore = persistStore(store);
