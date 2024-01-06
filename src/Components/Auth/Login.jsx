import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Érvénytelen e-mail formátum');
      return;
    }

    if (password.length < 6) {
      alert('A jelszónak legalább 6 karakter hosszúnak kell lennie');
      return;
    }

    sessionStorage.setItem('isLoggedIn', true);

    setIsLoggedIn(true);

    navigate('/');
  };

  const handleLogout = () => {
    if (sessionStorage.getItem('isLoggedIn')) {
      sessionStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      navigate('/login');
    } else {
      
      console.error('Felhasználó nincs bejelentkezve');
    }
  }

  return (
    <div className={classes.container}>
      <h2>Bejelentkezés</h2>
      {isLoggedIn ? (
        <div>
          <p>Bejelentkezve</p>
          <button onClick={handleLogout}>Kijelentkezés</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Jelszó:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Bejelentkezés</button>
        </form>
      )}
    </div>
  );
};

export default Login;
