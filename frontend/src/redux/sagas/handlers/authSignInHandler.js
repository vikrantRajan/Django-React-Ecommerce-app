import { call, put } from "redux-saga/effects";
import { signInFailure, signInSuccess } from "../../slices/authSlice";
import { SignIn } from "../requests/authSignInRequest";

export function* handleSignIn(action) {
    try {
        const response = yield call(SignIn, action.payload)
        yield put(signInSuccess(response))
    } catch (err) {
        yield put(signInFailure(`${err.toString()}`))
    }
}