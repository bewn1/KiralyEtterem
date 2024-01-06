import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {

  const setCartHandler = (data) => {

    props.setCart({
      description: props.description,
      id: props.id,
      price: props.price,
      amount: Number(data),
      name: props.name});
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price.toFixed()} Ft</div>
      </div>
      <div>
        <MealItemForm id={props.id} setCartHandler={setCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
