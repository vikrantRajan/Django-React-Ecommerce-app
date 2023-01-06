import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import productDetailsReducer from './slices/productDetailsSlice';
import productListReducer from './slices/productListSlice';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        auth: authReducer,
        productList: productListReducer,
        productDetails: productDetailsReducer,
        cart: cartReducer

    },
    middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)
export default store