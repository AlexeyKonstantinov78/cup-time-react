import { Promo } from '../Promo/Promo';
import { Products } from '../Products/Products';
import { Route, Routes } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { Order } from '../Order/Order';

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />
        <Route
          path='/cart' element={
            <>
              <Cart />
              <Order />
            </>
          } />
      </Routes>
    </main>
  );
};

