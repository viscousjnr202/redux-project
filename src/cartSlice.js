import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartItems } from "./data";


const url = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', () =>{
        return fetch(url).then(res =>res.json())
        .catch (err => console.log(err));
})
 
const initialState ={
    cart:[],
    total: 0,
    amount: 1,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cart = []
        },
        remove: (state, action)=>{
            console.log(action);
            state.cart = state.cart.filter(item =>{
                return( item.id !== action.payload)
            })
        },
        increase: (state, action) =>{
           let findCart = state.cart.find(item => item.id === action.payload)
           findCart.amount = findCart.amount + 1
        },
        decrease: (state, action) =>{
           const findCart = state.cart.find(item => item.id === action.payload)
           findCart.amount = findCart.amount - 1
        },
        totals: (state, action) =>{
           let amount = 0;
           let total = 0
            state.cart.forEach(item =>{
                amount += item.amount
                total += item.price*item.amount
            })
            state.amount = amount
            state.total = total
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getCartItems.pending,(state, action) =>{
            state.isLoading = true
        }).addCase(getCartItems.fulfilled,(state, action) =>{
            state.cart = action.payload
            state.isLoading = false
        }).addCase(getCartItems.rejected,(state, action) =>{
            state.isLoading = false
        })
    }
    
})
// console.log(cartSlice)
export const {clearCart, remove, increase, decrease, totals} = cartSlice.actions
export default cartSlice.reducer


