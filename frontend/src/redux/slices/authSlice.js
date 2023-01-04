import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: ''
    },
    reducers: {
        signInFetch: (state, action) => {
            state.isLoading = true;
        },
        signInSuccess: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        },
        signInFailure: (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isError = true
            state.message = action.payload
        },
        validateUserFetch: (state, action) => {
            state.isLoading = true;
        },
        validateUserSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload ? state.user : null
        },
        validateUserFailure: (state) => {
            state.user = null
            state.isError = true
        },
        signOut: (state) => {
            state.user = null;
            state.isLoading = false;
            state.isError = false
            state.isSuccess = false;
            state.message = ''},
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    
})
export const {
    signInFetch,
    signInSuccess,
    signInFailure,
    validateUserFetch,
    validateUserSuccess,
    validateUserFailure,
    signOut,
    reset
} = authSlice.actions
export default authSlice.reducer