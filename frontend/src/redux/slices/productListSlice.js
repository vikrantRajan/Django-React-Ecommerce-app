import { createSlice } from '@reduxjs/toolkit';

export const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        products: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: null,
    },
    reducers: {
        productListFetch: (state, action) => {
            state.isLoading = true;
        },
        productListSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        },
        productListFailure: (state, action) => {
            state.products = null;
            state.isLoading = false;
            state.isError = true
            state.message = action.payload
        }
    },
})

export const {
    productListFetch,
    productListSuccess,
    productListFailure
} = productListSlice.actions
export default productListSlice.reducer