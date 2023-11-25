import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import product from '@app-redux/slices/productSlice.ts';
import auth from "@app-redux/slices/authSlice.ts";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({ product, auth });

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({reducer: persistedReducer,devTools:true});
export const persistor = persistStore(store);