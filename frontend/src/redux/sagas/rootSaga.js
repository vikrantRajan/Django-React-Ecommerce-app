import { all, takeLatest } from "redux-saga/effects";
import { handleSignIn } from "../sagas/handlers/authSignInHandler";
import { handleValidate } from "../sagas/handlers/authValidateHandler";
import { handleGetAllProducts } from "../sagas/handlers/productHandler";
import { signInFetch, validateUserFetch } from "../slices/authSlice";
import { productFetch } from "../slices/productSlice";
export function* watcherSaga() {
    yield all([
        takeLatest(signInFetch.type, handleSignIn),
        takeLatest(validateUserFetch.type, handleValidate),
        takeLatest(productFetch.type, handleGetAllProducts)
    ]) 
}