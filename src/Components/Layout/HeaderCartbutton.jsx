import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {useContext} from "react";
import CartContext from "../../Store/Cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const items = ctx.items.reduce((sumNUmber, item) => {
    return sumNUmber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Kosarad</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};


export default HeaderCartButton;