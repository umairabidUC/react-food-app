import Header from './components/Layout/Header';
import { useState } from "react";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
function showCartHandler(){
  setCartIsShown(true);
}

function hideCartHancler({
  setCartIsShown(false);
})


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHancler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
