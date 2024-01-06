import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealImage from '../../Assets/HeaderImg.jpg';
import HeaderCartButton from './HeaderCartbutton';
import HeaderLoginButton from './HeaderLoginButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Király Étterem</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        {props.isLoggedIn ? (
          <HeaderLoginButton onLogoutClick={props.onLogoutClick} isLoggedIn={props.isLoggedIn} />
        ) : (
          <HeaderLoginButton onShowLogin={props.onShowLogin} />
        )}
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="A table full of" />
      </div>
    </Fragment>
  );
};


export default Header;
