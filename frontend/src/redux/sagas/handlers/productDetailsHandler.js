import { call, put } from "redux-saga/effects";
import { productDetailsFailure, productDetailsSuccess } from "../../slices/productDetailsSlice";
import { getProduct } from "../requests/productDetailsRequest";

export function* handleGetProduct(action) {
    try {
        const response = yield call(getProduct, action.payload)
        yield put(productDetailsSuccess(response))
    } catch (err) {
        yield put(productDetailsFailure(`${err.toString()}`))
    }
}