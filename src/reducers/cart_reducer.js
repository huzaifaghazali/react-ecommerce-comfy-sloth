import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  // ------ Adding item into the cart ------
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);

    // Amount already exist in the cart
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;

          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }

          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    }
    // Amount does not exist in the cart
    else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  // ------ Removing and Clearing the cart ------
  // Removing the item from the cart
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  // Clearing the whole cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  // ------ Increasing and decreasing cart item ------ 
  if( action.type === TOGGLE_CART_ITEM_AMOUNT){
    
    const {id, value} = action.payload;
    const tempCart = state.cart.map((item) => {
      if(item.id === id) {
        
        // Increase the Cart item
        if(value === 'inc') {
          let newAmount = item.amount + 1;
          // must not be greater than the amount
          if(newAmount > item.max) {
            newAmount = item.max;
          }
          return {...item, amount: newAmount };
        }

        // Decrease the cart item
        if(value === 'dec') {
          let newAmount = item.amount - 1;
          // must not be less than 1
          if(newAmount < 1) {
            newAmount = 1;
          }
          return {...item, amount: newAmount };
        }
      } 
      return item;
    })
    
    return { ...state, cart: tempCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
