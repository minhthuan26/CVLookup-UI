import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import loaderSlice from './Loader/loaderSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    auth: authSlice,
    loader: loaderSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            rehydrated: false
        }),
})

export const persistor = persistStore(store)

export default store
