import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from './icons/icons';

const Navbar = () => {
    const {amount} = useSelector((state) => state.cart)
  return (
    <main>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', background:'blue', margin:'0',padding:"0", boxSizing:'border-box' }}>
        <h2 style={{color:'whitesmoke'}}>Redux Toolkit</h2>
        <div style={{width: '100px', position:'relative', height:'auto'}}> 
            <span style={{display:"block", position:'absolute', top:'0', right:'70%', background:'#FFD700', width:'20px', borderRadius:'50%', textAlign:'center', color:'whitesmoke', border:'none',font:"bold", fontWeight:"bolder"}}>{amount}</span>
            <CartIcon/>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
