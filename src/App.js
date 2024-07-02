import Header from './components/Layout/Header';
import { useState } from "react";
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
function showCartHandler(){
  setCartIsShown(true);
}



  return (
    <CartProvider>
      {cartIsShown && <div>Cart.....</div>}
      <Header onShowCart={showCartHandler()} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
