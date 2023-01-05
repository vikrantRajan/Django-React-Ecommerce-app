import { call, put } from "redux-saga/effects";
import { productListFailure, productListSuccess } from "../../slices/productListSlice";
import { getAllProducts } from "../requests/productListRequest";

export function* handleGetAllProducts(action) {
    try {
        const response = yield call(getAllProducts, action.payload)
        yield put(productListSuccess(response))
    } catch (err) {
        yield put(productListFailure(`${err.toString()}`))
    }
}