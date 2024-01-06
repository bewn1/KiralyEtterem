import classes from './MealItemForm.module.css';
import Input from "../../../UI/Input";
import {useRef} from "react";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const setCart = (event) => {
    event.preventDefault();
  const inputData = inputRef.current.value;
    props.setCartHandler(inputData);

  }

  return (
    <form className={classes.form} onSubmit={setCart}>
      <Input
        label='Darab'
        ref={inputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1'
        }}
      />
      <button type='submit'>Hozzáad</button>
    </form>
  );
};

export default MealItemForm;