import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

import s from './Cart.module.css';
import { useOrder } from '../../context/OrderContext';
import { API_URL, ERROR, SUCCESS } from '../../const';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const totalPrice = cart
    ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const cartCount = cart
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('error featch');
      }

      const result = await response.json();
      setOrderStatus(SUCCESS);
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus(ERROR);
      console.error(`Ошибка: ${error}`);
    } finally {
      setModalIsOpen(true);
    }
  };

  return (
    <section className={s.cart}>
      <div className={`container ${s.cart__container}`}>
        <h2 className={s.cart__title}>Корзина ({cartCount})</h2>
        <ul className={s.cart__items}>
          {cart &&
            cart.map((product) => <CartItem key={product.id} {...product} />)}
        </ul>
        <div className={s.cart__summary}>
          <h3 className={s.cart__summaryTitle}>Итого:</h3>
          <p className={s.cart__total}>{totalPrice}&nbsp;₽</p>
          <button className={s.cart__orderButton} onClick={handleSubmit}>
            Заказать
          </button>
        </div>
      </div>

      <Modal
        className={s.modalCart}
        overlayClassName={s.modalCart__overlay}
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel='Cart Modal'>
        <h2 className={s.modalCart__title}>
          {orderStatus === SUCCESS
            ? `Заказ успешноотправлен! Номер заказа: ${orderId}`
            : 'Произошла ошибка при отправке заказа'}
        </h2>
        <button className={s.modalCart__button} onClick={closeModal}> <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            x='5.71228'
            y='14.1975'
            width='12'
            height='1.5'
            transform='rotate(-45 5.71228 14.1975)'
            fill='#B8B8B8'
          />
          <rect
            x='14.1976'
            y='15.2582'
            width='12'
            height='1.5'
            transform='rotate(-135 14.1976 15.2582)'
            fill='#B8B8B8'
          />
        </svg></button>
      </Modal>
    </section>
  );
};
