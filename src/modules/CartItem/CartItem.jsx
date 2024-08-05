import { useState } from 'react';
import { API_URL } from '../../const';

import s from './CartItem.module.css';
import { useCart } from '../../context/CartContext';

export const CartItem = ({ id, title, img, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  return (
    <li className={s.cartItem}>
      <img className={s.cartItem__img} src={`${API_URL}${img}`} alt={title} />
      <div className={s.cartItem__info}>
        <h3 className={s.cartItem__title}>{title}</h3>
        <div className={s.cartItem__quantity}>
          <button
            className={s.cartItem__quantityButton + ' ' + s.cartItem__quantityButton_minus}
            onClick={handleDecrease}></button>
          <input
            className={s.cartItem__quantityInput}
            type='number'
            value={itemQuantity}
            readOnly
          />
          <button className={s.cartItem__quantityButton + ' ' + s.cartItem__quantityButton_plus} onClick={handleIncrease}></button>
        </div>
        <p className={s.cartItem__price}>{price * quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};
