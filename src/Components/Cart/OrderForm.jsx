import React, { useState, useContext, useEffect } from 'react';
import classes from "./OrderForm.module.css";
import CartContext from "../../Store/Cart-context";

const OrderForm = ({ onSubmit, onClose }) => {
  const ctx = useContext(CartContext);

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    zipCode: '',
    city: '',
    address: '',
    houseNumber: '',
    floor: '',
    door: '',
    note: '',
  });

  const [orderedItems, setOrderedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const items = ctx.items.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.amount,
    }));
    setOrderedItems(items);

    const amount = ctx.totalAmount.toFixed();
    setTotalAmount(amount);
  }, [ctx.items, ctx.totalAmount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      personalInfo: {
        lastName: formData.lastName,
        firstName: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        city: formData.city,
        address: formData.address,
        houseNumber: formData.houseNumber,
        floor: formData.floor,
        door: formData.door,
        note: formData.note,
      },
      items: orderedItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: totalAmount,
    };
    onSubmit(orderData);
  };


  return (
    <div className={classes.orderFormContainer}>
      <p className={classes.orderFormTitle}>A rendelésed itt tudod megtenni</p>
      <form onSubmit={handleSubmit}>
      <div className={classes.orderedItems}>
      <h2>Rendelés részletei</h2>
    <ul>
      {orderedItems.map((item) => (
        <li key={item.name}>
          {item.name} - {item.price} Ft/db ({item.quantity} db) - Összesen: {item.total} Ft
        </li>
      ))}
    </ul>
    <p>Teljes összeg: {totalAmount} Ft</p>
    </div>
        <div className={classes.flexRow}>
          <label className={classes.orderFormLabel}>
            Keresztnév:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
              

          <label className={classes.orderFormLabel}>
            Vezetéknév:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
        
          <label className={classes.orderFormLabel}>
            Telefonszám:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
        </div>

        <div className={classes.flexRow}>
          <label className={classes.orderFormLabel}>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
      
          <label className={classes.orderFormLabel}>
            Irányítószám:
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>

          <label className={classes.orderFormLabel}>
            Város:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
        </div>
        

        <div className={classes.flexRow}>
          <label className={classes.orderFormLabel}>
            Lakcím:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>

          <label className={classes.orderFormLabel}>
            Házszám:
            <input
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>

          <label className={classes.orderFormLabel}>
            Emelet:
            <input
              type="number"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>

          <label className={classes.orderFormLabel}>
            Ajtó:
            <input
              type="number"
              name="door"
              value={formData.door}
              onChange={handleChange}
              className={classes.orderFormInput}
            />
          </label>
        </div>

        <label className={classes.orderFormLabel}>
          Note:
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            className={classes.orderFormTextarea}
          />
        </label>
        <br />
        <div className={classes.orderFormButtons}>
            <button type="submit" className={classes.orderFormButton}>Küldés</button>
            <button type='button' onClick={onClose} className={classes.orderFormCloseButton}>Vissza</button>
        </div>
      </form>

    </div>
  );
};


export default OrderForm;
