import React from 'react';
import {useCart} from '../context/Cart';
import Cart from './Cart';

const Item = (props) => {
    const cart=useCart();
    console.log("Cart",cart);
  return (
    <div className='item-card'>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={()=>cart.setItems([...cart.items,{name:props.name,price:props.price}])}>Add to Cart</button>
    </div>
  )
}

export default Item
