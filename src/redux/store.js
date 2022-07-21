import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage/";
import loginSlice from "./slice/loginSlice";
import profileSlice from "./slice/profileSlice";
import { combineReducers } from "redux";

const persistConfig = {
    key : 'root',
    storage : AsyncStorage
}
const reducers = combineReducers({
    login : loginSlice,
    profile : profileSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer : persistedReducer,
    middleware :  (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools : true
})