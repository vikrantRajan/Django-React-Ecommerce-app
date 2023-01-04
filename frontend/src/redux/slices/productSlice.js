import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: null,
    },
    reducers: {
        productFetch: (state, action) => {
            state.isLoading = true;
        },
        productSuccess: (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        },
        productFailure: (state, action) => {
            state.user = null;
            state.isLoading = false;
            state.isError = true
            state.message = action.payload
        }
    },
})

export const {
    productFetch,
    productSuccess,
    productFailure
} = productSlice.actions
export default productSlice.reducer