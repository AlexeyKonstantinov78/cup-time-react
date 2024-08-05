import Modal from 'react-modal';
import './ProductModal.css';
import { API_URL } from '../../const.js';
import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import _ from './ProductModal.module.css';

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

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  if (!data) {
    return null;
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    // ! todo добавить товар в корзину
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <Modal
      className={_.modal}
      overlayClassName={_.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`${data.title}`}>
      <img
        className={_.image}
        src={`${API_URL}${data.img}`}
        alt={data.title}
      />
      <div className={_.content}>
        <div className={_.header}>
          <h2 className={_.title}>{data.title}</h2>
          <p className={_.price}>{data.price}&nbsp;₽</p>
        </div>

        <ul className={_.list}>
          {Object.entries(data.additional).map(([key, value]) => (
            <li className={_.item} key={key}>
              <span className={_.field}>{key}:</span>
              <span className={_.value}>{value}</span>
            </li>
          ))}
        </ul>

        <div className={_.footer}>
          <div className={_.count}>
            <button
              className={_.btn}
              onClick={handleDecrease}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#B8B8B8" />
                <rect x="12" y="17" width="12" height="2" fill="#1D1C1D" />
              </svg>
            </button>
            <input
              className={_.number}
              type='number'
              value={quantity}
              readOnly
            />
            <button
              className={_.btn}
              onClick={handleIncrease}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="35" height="35" rx="3.5" stroke="#B8B8B8" />
                <rect x="12" y="17.25" width="12" height="1.5" fill="#1D1C1D" />
                <rect x="17.25" y="24" width="12" height="1.5" transform="rotate(-90 17.25 24)" fill="#1D1C1D" />
              </svg>
            </button>
          </div>
          <button className={_.btnAddCart} onClick={handleAddToCart}>
            Добавить
          </button>

        </div>
        <button className={_.btnCloseCard} onClick={onRequestClose}>
          <svg
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
          </svg>
        </button>
      </div>

    </Modal>
  );
};
