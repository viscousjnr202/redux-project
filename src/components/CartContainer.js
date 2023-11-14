import React from 'react';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../cartSlice';
import { open } from '../modalSilce';




const CartContainer = () => {
    const {cart, amount, isLoading, total} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

 if(amount < 1){
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Your Bag</h2>
            <h4>is currently empty</h4>
        </div>
    )
 }
  return (
    <div>
        <h2 style={{marginTop:'50px', textAlign:'center'}}>YOUR BAG</h2>
        {cart.map(item =>{
          return(
            <div style={{marginTop:"15px"}}>
                <CartItems key={item.id} {...item}/>
            </div>
          )
        })}
        <footer style={{marginTop:'5rem'}}>
            <div style={{borderBottom:'2px solid #888'}}></div>
            <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', marginTop:'5px'}}>
                <span style={{font:"bold", fontWeight:"bolder"}}>Total</span>
                <span style={{font:"bold", fontWeight:"bolder"}}>${total.toFixed(2)}</span>
            </div>
            <div style={{textAlign:"center"}}>
                <button style={{padding:'10px',marginTop:'13px',font:"bold", fontWeight:"bolder", border:'1px solid black', borderRadius:"5px"}} onClick={() => dispatch(open())}>CLEAR CART</button>
            </div>
        </footer>
    </div>
  );
}

export default CartContainer;
