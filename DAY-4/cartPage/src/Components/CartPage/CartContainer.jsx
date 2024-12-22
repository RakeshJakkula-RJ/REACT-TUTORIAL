import React from 'react'
import { useState } from 'react';
import CartItem from './CartItem';
import Total from './Total';


let cartItems = [
                 {id:1, label:"Noodles", price:120, quantity:1},
                 {id:2, label:"Biryani", price:200, quantity:1},
                 {id:3, label:"Fried Rice", price:150, quantity:1}
           ];

   const CartContainer = () => {

    const[cart, setCart] = useState(cartItems);

    const totalPrice = cart.reduce(function(bag,item){ //functional logic to add total price of the items 
         return (
               bag + (item.price * item.quantity)
         )
    },0);
  
        const changeQuantity = (id, value) => {  // functional logic to changeQuantity +1 & -1 of the items
 

            let updateCart = cart.map((item)=>{

                let newQuantity = item.quantity + value;

                newQuantity = newQuantity > 0 ? newQuantity : 0;
                
               return  item.id === id ? {...item, quantity : newQuantity} : item  
            }   
             );
            setCart(updateCart);
        };
     
       return(
             <div>
               
                   {cart.map((item)=>{

                       return <CartItem key={item.id} {...item} changeQuantity={changeQuantity} />
                   })}
                   <Total totalPrice={totalPrice} />
             </div>
       );

   };

   export default CartContainer;

   // CartContainer : 1.CartItem + 2.Total