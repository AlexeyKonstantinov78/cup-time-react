import { CartItem } from '../CartItem/CartItem';
import { useCart } from '../context/CartContext';

import './Cart.css';

export const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;

  const cartCount = cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">
          Корзина ({cartCount})
        </h2>
        <ul className="cart__items">
          {cart && cart.map(product => <CartItem key={product.id} {...product} />)}
        </ul>
        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__total">{totalPrice}&nbsp;₽</p>
          <button className="cart__order-button">Заказать</button>
        </div>
      </div>
    </section>
  );
};
