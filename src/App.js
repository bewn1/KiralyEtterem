import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext, useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import Login from './Components/Auth/Login';

function App() {
    const [cartIsShow, setCartIsShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const hideCartHandler = () => {
      setCartIsShow(false);
    };
    const openCartHandler = () => {
      setCartIsShow(true);
    };
    const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };

  return (
    <Router>
      <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={openCartHandler} isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
