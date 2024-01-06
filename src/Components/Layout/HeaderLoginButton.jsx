import React from 'react';
import classes from './HeaderLoginButton.module.css';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '../Cart/LoginIcon';

const HeaderLoginButton = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (props.isLoggedIn) {
      console.log('Logout clicked');
      props.onLogoutClick();
    } else {
      console.log('Login clicked');
      navigate('/login');
    }
  };

  return (
    <button className={classes.button} onClick={handleButtonClick}>
      <span className={classes.icon}>
        <LoginIcon />
      </span>
      <span>{props.isLoggedIn ? 'Kijelentkezés' : 'Bejelentkezés'}</span>
    </button>
  );
};

export default HeaderLoginButton;
