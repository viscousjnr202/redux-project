import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpen:false
}

const createModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        open:(state, action) =>{
            state.isOpen = true
        },
        close:(state, action) =>{
            state.isOpen = false
        }
    }
})

// console.log(createModalSlice)
export const {open, close} = createModalSlice.actions
export default createModalSlice.reducer