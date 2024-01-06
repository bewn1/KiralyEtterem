import {useReducer} from 'react';

import CartContext from './Cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const itemId = state.items.findIndex((item) => item.id === action.item.id);
    const item = state.items.find((item) => item.id === action.item.id);
    let updatedItems;

    if (item) {
      const updatedItem = {
        ...item,
        amount: item.amount + action.item.amount,
      }
      updatedItems = [...state.items];
      updatedItems[itemId] = updatedItem;
    }else{
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };

  }else if(action.type === 'REMOVE'){
    const itemId = state.items.findIndex((item) => item.id === action.id);
    const item = state.items.find((item) => item.id === action.id);
    const updatedTotalAmount = state.totalAmount - item.price;

    let updatedItems;

    if(item.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else{
      const updateItem = {...item, amount: item.amount - 1};
      updatedItems = [...state.items];
      updatedItems[itemId] = updateItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }
  return state;
  
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
