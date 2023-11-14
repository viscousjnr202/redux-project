import React from 'react';
import { ChevronUp, ChevronDown } from '../icons/icons';
import { decrease, increase, remove } from '../cartSlice';
import { useDispatch } from 'react-redux';


const CartItems = ({id, img, title, price , amount}) => {
    const dispatch = useDispatch()
  return (
    <div style={{maxWidth:'80%', margin:"auto", display:"flex",justifyContent:"space-between", }}>
      <div style={{display:"flex", alignItems:"center",gap:"30px"}}>
        <img src={img} alt={title} style={{width:'100px'}}/>
        <div style={{position:"relative"}}>
            <div style={{}}>
                <h3 style={{marginTop:"0"}}>{title}</h3>
                <h4 style={{marginTop:"-8px"}}>${price}</h4>
                <button style={{border:"none"}} onClick={() => dispatch(remove(id))}>Remove</button>
            </div>
        </div>
      </div>
      <div style={{width:'50px', textAlign:"center"}}>
        <div onClick={() => dispatch(increase(id))}>
          <ChevronUp/>
        </div>
        <p style={{textAlign:"center", marginTop:"0", marginBottom:"0", display:"flex", justifyContent:"center", alignItems:"center"}}>{amount}</p>
        <div onClick={() => {
            if(amount === 1){
                dispatch(remove(id))
                return
            }
             dispatch(decrease(id)
            )}}>
         <ChevronDown/>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
