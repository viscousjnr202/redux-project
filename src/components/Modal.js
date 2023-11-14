import React from 'react';
import { clearCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { close } from '../modalSilce';

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <div style={{maxWidth:'350px',background:'rgb(243, 230, 230)',height:"auto", margin:'auto', position:"absolute", alignContent:'center', padding:'10px', top:"40%", left:'40%',boxShadow: "5px 5px 5px black", textAlign:"center",borderRadius:"5px", zIndex:"4"}}>
      <div>
        <h4>Remove all items from your shopping carts?</h4>
      </div>

      <div style={{display:"flex", gap:'30px', justifyContent:"center", alignItems:"center", marginBottom:"20px",}}>
      <div>
        <button onClick={() =>{
            dispatch(clearCart())
            dispatch(close())
        }}>
            CONFIRM
        </button>
      </div>
      <div>
        <button onClick={() =>{
            dispatch(close())
        }}>
            CANCEL
        </button>
      </div>
      </div>
    </div>
  );
}

export default Modal;
