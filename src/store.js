import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {  persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { initState } from './reducers/index';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'], // which reducer want to store,

};
const persistedReducer = persistReducer(persistConfig, rootReducer)



const middleware = [thunk];


const store=createStore(
    persistedReducer,
    initState,
    compose(
        applyMiddleware(...middleware)
    )
);
const persistor = persistStore(store)


export {store, persistor}
