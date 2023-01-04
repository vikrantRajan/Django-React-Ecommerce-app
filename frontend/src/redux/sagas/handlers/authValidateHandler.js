import { call, put } from "redux-saga/effects";
import { validateUserFailure, validateUserSuccess } from "../../slices/authSlice";
import { requestValidate } from "../requests/authValidateRequest";

export function* handleValidate(action) {
    try {
        const response = yield call(requestValidate, action.payload)
        yield put(validateUserSuccess(response))
    } catch (err) {
        console.log(err)
        yield put(validateUserFailure(`error source: handleValidate -> message: ${err.toString()}`))
        // throw new Error(err)
    }
}