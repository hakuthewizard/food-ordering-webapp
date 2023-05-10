import React, { Fragment  } from 'react';
import Header from './components/Layout/Header'
import './App.css';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import CardProvider from './store/CartProvider';
import { useState } from 'react';
const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
      setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
return(
  <CardProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}
    />}
    <Header onShowCart={showCartHandler}
    />
    <main>
      <Meals/>
    </main>
    </CardProvider>
)
};

export default App;
