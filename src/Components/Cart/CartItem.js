import classes from './CartItem.module.css';
import {useContext} from "react";
import CartContext from "../../Store/Cart-context";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const setCartHandler = () => {
    ctx.addItem({
      description: props.description,
      id: props.id,
      price: props.price,
      amount: 1,
      name: props.name});
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => {ctx.removeItem(props.id)}}>−</button>
        <button onClick={setCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
