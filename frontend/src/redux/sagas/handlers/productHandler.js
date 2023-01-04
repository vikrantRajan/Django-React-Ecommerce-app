import { call, put } from "redux-saga/effects";
import { productFailure, productSuccess } from "../../slices/productSlice";
import { getAllProducts } from "../requests/productRequest";

export function* handleGetAllProducts(action) {
    try {
        const response = yield call(getAllProducts, action.payload)
        yield put(productSuccess(response))
    } catch (err) {
        yield put(productFailure(`${err.toString()}`))
    }
}