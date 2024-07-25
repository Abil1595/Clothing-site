import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
const initialState = {
  data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
  itemCount: localStorage.getItem("itemCount") ? parseInt(localStorage.getItem("itemCount"), 10) : 0,
  totalAmount: 0, 
  totalPrice: localStorage.getItem("totalPrice") ? parseFloat(localStorage.getItem("totalPrice")) : 0, // Parse float from localStorage
  users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
  imageUrl: '',
 
  totalQuantity: 0, 
  cartTotalQuantity: 0,   
  cartTotalAmount: 0,    
              
  
};    

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
};
   
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.data[existingIndex] = {
          ...state.data[existingIndex],
          cartQuantity: state.data[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.data.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    decreaseCart(state, action) {
      const itemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.data[itemIndex].cartQuantity > 1) {
        state.data[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.data[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.data.filter(
          (item) => item.id !== action.payload.id
        );
     
        state.data = nextCartItems;

        toast.error("Product removed from cart", {     
          position: "bottom-left",
        });
      }

      localStorage.setItem("data", JSON.stringify(state.data));
    },
    
    deleteItemFromCart(state, action) {
      const { id } = action.payload;
      const itemToDelete = state.data.find(item => item.id === id);
      if (itemToDelete) {
        state.data = state.data.filter(item => item.id !== id);
        state.itemCount -= 1;
        state.totalPrice -= itemToDelete.price; // Update totalPrice
        localStorage.setItem("data", JSON.stringify(state.data));
        localStorage.setItem("itemCount", JSON.stringify(state.itemCount));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice)); // Update totalPrice in localStorage
      }
    },
    increaseQuantity(state, action) {
      const { productId } = action.payload;
      const itemToIncrease = state.data.find(item => item.id === productId);
      if (itemToIncrease) {
        itemToIncrease.quantity = (itemToIncrease.quantity || 1) + 1;
        state.totalPrice += itemToIncrease.price;

        // Calculate totalAmount based on the current state of the cart
        state.totalAmount = state.data.reduce((total, item) => total + (item.price * item.quantity), 0);

        localStorage.setItem("data", JSON.stringify(state.data));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
      }
    },
    
    decreaseQuantity(state, action) {
      const { productId } = action.payload;
      const itemToDecrease = state.data.find(item => item.id === productId);
      if (itemToDecrease && itemToDecrease.quantity > 0) {
        itemToDecrease.quantity -= 1;
        state.totalPrice -= itemToDecrease.price; // Update totalPrice
        localStorage.setItem("data", JSON.stringify(state.data));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice)); // Update totalPrice in localStorage
      }
    },
    resetCart(state) {
      state.data = [];
      state.totalPrice = 0;
      state.itemCount = 0;
      localStorage.removeItem("data");
      localStorage.setItem("itemCount", JSON.stringify(state.itemCount));
      localStorage.removeItem("totalPrice"); // Remove totalPrice from localStorage
    },
  
   
    clearCart(state, action) {
      state.data = [];
      localStorage.setItem("data", JSON.stringify(state.data));
      toast.error("Cart cleared", { position: "bottom-left" });
    },

    
    
    calculateTotalAmount(state) {
      state.totalAmount = calculateTotalPrice(state.data); // Update totalAmount
    },
    setImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
    add(state, action) {
      state.users = [...state.users, { ...action.payload }];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    remove(state, action) {
      const userIdToRemove = action.payload;
      state.users = state.users.filter(user => user.id !== userIdToRemove);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    update(state, action) {
      const updatedUser = action.payload;
      state.users = state.users.map(user =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    editUser(state, action) {
      const { id, name, image } = action.payload;
      const existingUser = state.users.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.image = image;
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },  
    getTotals(state, action) {
      let { total, quantity } = state.data.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total);
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;   
    }, 
  
    updateItem(state, action) {
      const { id, name, price, description } = action.payload;
      const existingItem = state.data.find(item => item.id === id);
      if (existingItem) {
        existingItem.name = name;
        existingItem.price = price;
        existingItem.description = description;
        localStorage.setItem("data", JSON.stringify(state.data));
      }
    }
  }
});

export const {
  addItemToCart,
  deleteItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
  calculateTotalAmount,
  setImageUrl,
  add,
  remove,
  update,
  editUser,
  updateItem,
  getCartTotal,
  clearCart,
  getTotals,
  decreaseCart,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
