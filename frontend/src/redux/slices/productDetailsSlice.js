import { createSlice } from '@reduxjs/toolkit';

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: {
        product: {reviews: []},
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: null,
    },
    reducers: {
        productDetailsFetch: (state, action) => {
            state.isLoading = true;
        },
        productDetailsSuccess: (state, action) => {
            state.product = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        },
        productDetailsFailure: (state, action) => {
            state.product = null;
            state.isLoading = false;
            state.isError = true
            state.message = action.payload
        }
    },
})

export const {
    productDetailsFetch,
    productDetailsSuccess,
    productDetailsFailure
} = productDetailsSlice.actions
export default productDetailsSlice.reducer