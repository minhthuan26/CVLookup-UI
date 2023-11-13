import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import loaderSlice from './Loader/loaderSlice'
import JobFieldSlice from './JobField/JobFieldSlice'
import JobCareerSlice from './JobCareer/JobCareerSlice'
import ProvinceSlice from './Province/ProvinceSlice'
import ExperienceSlice from './Experience/ExperienceSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    auth: authSlice,
    loader: loaderSlice,
    jobField: JobFieldSlice,
    jobCareer: JobCareerSlice,
    province: ProvinceSlice,
    experience: ExperienceSlice
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
