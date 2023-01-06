import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
export const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        cartAddItem: ( state, action ) => {
            const item = action.payload
            let itemIndex = _.findIndex( state.cart, function( o ) { return o._id === item._id; } );
            if ( itemIndex < 0 )
            {
                // item not found in cart, add it for the first time
                state.cart.push({
                    brand: item.brand,
                    category: item.category,
                    countInStock: item.countInStock,
                    createdAt: item.createdAt,
                    description: item.description,
                    image: item.image,
                    name: item.name,
                    numReviews: item.numReviews,
                    price: item.price,
                    qty: Number(item.qty),
                    rating: item.rating,
                    user: item.user,
                    _id: item._id
                })
            } else
            {
                state.cart[itemIndex] = {
                    brand: item.brand,
                    category: item.category,
                    countInStock: item.countInStock,
                    createdAt: item.createdAt,
                    description: item.description,
                    image: item.image,
                    name: item.name,
                    numReviews: item.numReviews,
                    price: item.price,
                    qty: Number(item.qty),
                    rating: item.rating,
                    user: item.user,
                    _id: item._id
                }
            }
            localStorage.setItem( 'cart', JSON.stringify( state.cart ) )
        },
        cartRemoveItem: ( state, action ) => {
            let i = _.remove(state.cart, (n) => { return n._id === action.payload;  });
            console.log('removed', i)
            localStorage.setItem( 'cart', JSON.stringify( state.cart ) )
        }
    },
} )

export const {
    cartAddItem,
    cartRemoveItem
} = cartSlice.actions
export default cartSlice.reducer