import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import product from '@app-redux/slices/productSlice';
import guarantee from '@app-redux/slices/guaranteeSlice';
import auth from "@app-redux/slices/authSlice";
import medicalAct from "@app-redux/slices/medicalActSlice";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({ product, auth, guarantee, medicalAct });

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({reducer: persistedReducer,devTools:true});
export const persistor = persistStore(store);