import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   itemCount: 0,
//   data : []
// };

const initialState = {
 
  data :   localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [],
  
  itemCount :  0,
  price:{},
  totalQuantity:0,
    totalAmount:0,
    totalPrice: 0,
    users:  localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
    imageUrl: '',
    
} 
 const initialState1=JSON.parse(localStorage.getItem('cart'))??[]; 
 
const cartSlice = createSlice({   
  name: 'cart',
  
  initialState,
  initialState1,
  reducers: {   
    addItemToCart: (state, action) => {
      const newItem = action.payload;   
      state.data.push(newItem); 
      state.itemCount +=1;
      localStorage.setItem("data", JSON.stringify(state.data));
   
    },     
    
  
    deleteItemFromCart(state,action) {
       state.data = state.data.filter(product => product.id !== action.payload.id);
       state.itemCount -=1;
       localStorage.setItem("data", JSON.stringify(state.data));
    },
    add:(state,action)=>{
      state.users=[...state.users,{id:action.payload.id,name:action.payload.name,image:action.payload.image,price:action.payload.price,des:action.payload.des}]
      localStorage.setItem("users", JSON.stringify(state.users));
       },
       remove:(state,action)=>{
        state.users= state.users.filter(item=>item.id!== action.payload)
        localStorage.setItem("users", JSON.stringify(state.users));
       },
       update: (state, action) => {
        state.users.map(stat => {
          if (stat.id == action.payload.id) {
            const { name,image,price,des } = action.payload;
            (stat.name = name);
            (stat.image = image);
            (stat.price = price);
            (stat.des = des);
          }
          localStorage.setItem("users", JSON.stringify(state.users));
        });
      },
      setImageUrl: (state, action) => {
        state.imageUrl = action.payload;
      },
    
    resetCart(state) {
      state.data = [];
      state.totalPrice = 0;
      state.itemCount=0
    },
         
    increaseQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.data.find(p => p.id === productId);
      if (product) {
        product.quantity += 1;
        state.price *= product.price; 
        
      }
    },     
   
   
  },
  decreaseQuantity: (state, action) => {
    const { productId } = action.payload;
    const product = state.products.find(p => p.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      state.totalPrice -= product.price; // Decrease total price
    }
  },
 
  
     editUser: (state, action) => {
      const { id, name, image } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.image = image;
      }
    },
 
});




export const { addItemToCart } = cartSlice.actions;
export const{deleteItemFromCart}=cartSlice.actions;
export const { increaseQuantity,decreaseQuantity,resetCart } = cartSlice.actions;
export const {add,remove,update,editUser,updateItem,setImageUrl}=cartSlice.actions

export default cartSlice.reducer;
