import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)
export default store