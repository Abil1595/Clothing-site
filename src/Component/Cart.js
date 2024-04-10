import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteItemFromCart,addItemToCart} from '../features/cart/cartSlice'
import products from '../ProductData/ProductDetails';
 import { increaseQuantity } from '../features/cart/cartSlice';
 import { decreaseQuantity } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.data);
  const cartPrice=useSelector(state=>state.cart.price)
  const totalProducts = useSelector(state => state.cart.totalProducts);
  console.log(cartItemCount,'check')
  

  const handleAddItem = item => {
    dispatch(addItemToCart(item));
  
  };

  const handleRemoveFromCart = productId => {
    dispatch(deleteItemFromCart({ id: productId }));

  };


  const handleIncrease = productId => {
    dispatch(increaseQuantity({ productId }));
  };




  // return(  
  //   <div>
  //     {cartItemCount}  
  //   </div>
    
  // )

  return (   
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cartItemCount.map((product, index) =>{   
        const {name, price} = product
        console.log(product, 'result')
        return(
          <div product={product} key={index} className='cart-products'>
          <table className='table table-striped'>
            <tbody>
            <tr>
           <td className='cart-products'><img src={product.image} alt={""} /></td> 
           
           
           <td><p className='para'>{name}</p>
          
           </td> 
            
        
           <td> <p className='para'>Price: ${product.price}</p></td> 
         
          
           <td>   <button onClick={() => handleIncrease(product.id)}>+</button>
            <span>{product.quantity}</span><button className='para1' onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
           <button>-</button>
           
                     
           </td> 

            </tr>
           
            </tbody>
            </table><br/><br/>
            
           
          
        </div>
        )

})}
         
    </div>
  );
};

export default Cart;

    