import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import Navbar from './Navbar';
import CartContainer from './components/CartContainer'
import { getCartItems, totals } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';

const App = () => {
const {cart} = useSelector(state => state.cart)
const {modal}= useSelector(state => state)
const {isLoading} = useSelector(state =>state.cart)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(totals())
}, [cart])
 
useEffect(() => {
  dispatch(getCartItems())
}, [])
if(isLoading) return <h3>Loading...</h3>

return(
  <div>
    {modal.isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
  </div>
)
}


export default App;
