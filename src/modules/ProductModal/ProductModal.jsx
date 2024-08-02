import Modal from 'react-modal';
import './ProductModal.css';
import { API_URL } from '../../const.js';

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
  if (!data) {
    return null;
  }
  return (
    <Modal
      className='modal'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel='Product Modal'>
      <img
        className='modal__img'
        src={`${API_URL}${data.img}`}
        alt={data.title}
      />
      <div className='modal__content'>
        <h2 className='modal__title'>{data.title}</h2>
        <p className='modal__price'>{data.price}&nbsp;₽</p>
        <ul className='modal__list'>
          {Object.entries(data.additional).map(([key, value]) => (
            <li className='modal__item' key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <div className="modal__quantity">
          <div className="cart-item__quantity">
            <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
            <input className="cart-item__quantity-input" type="number" value={1} />
            <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
          </div>
          <button className="cart__order-button">Добавить</button>
        </div>
      </div>

      <button className='modal__close' onClick={onRequestClose}>
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
    </Modal>
  );
};
