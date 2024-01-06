import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";
import CartContext from "../../Store/Cart-context";
import React, { useContext, useState } from 'react';



const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isOrderModalVisible, setIsOrderModalVisible] = useState(false);

  const cartItem = (
    <ul className={classes['cart--items']}>
      {ctx.items.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        description={item.description}
        price={item.price}
      />
      ))}
    </ul>
  );

  const handleOrderClick = () => { 
    console.log("Order button clicked");   
    ctx.items.forEach((item) => handleOrderItem(item));
    setIsOrderModalVisible(true);
  };
  /*const handleOrderClick = () => {
    const orderedItems = ctx.items.map((item) => ({
      ...item,
      orderedQuantity: item.amount, 
    }));
    
    setIsOrderModalVisible(true);
  };*/

  const handleOrderItem = (item) => {
    
  };
  
  const handleOrderSubmit = (formData) => {
    console.log(formData);
    setIsOrderModalVisible(false);
    ctx.clearCart();
  };

  const handleCloseModal = () => {
    setIsOrderModalVisible(false);
  };

  return (
    <>
      <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
          <span>Teljes összeg</span>
          <span>{ctx.totalAmount.toFixed()} Ft</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button} onClick={handleOrderClick}>
            Rendelés
          </button>
        </div>
      </Modal>
      {isOrderModalVisible && (
        <OrderForm items={ctx.items} onSubmit={handleOrderSubmit} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Cart;
