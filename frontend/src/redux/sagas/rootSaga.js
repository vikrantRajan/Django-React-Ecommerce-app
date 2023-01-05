import { all, takeLatest } from "redux-saga/effects";
import { handleSignIn } from "../sagas/handlers/authSignInHandler";
import { handleValidate } from "../sagas/handlers/authValidateHandler";
import { handleGetProduct } from "../sagas/handlers/productDetailsHandler";
import { handleGetAllProducts } from "../sagas/handlers/productListHandler";
import { signInFetch, validateUserFetch } from "../slices/authSlice";
import { productDetailsFetch } from "../slices/productDetailsSlice";
import { productListFetch } from "../slices/productListSlice";
export function* watcherSaga() {
    yield all([
        takeLatest(signInFetch.type, handleSignIn),
        takeLatest(validateUserFetch.type, handleValidate),
        takeLatest(productListFetch.type, handleGetAllProducts),
        takeLatest(productDetailsFetch.type, handleGetProduct)
    ]) 
}