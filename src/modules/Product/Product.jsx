import { useState } from 'react';
import { API_URL } from '../../const';
import './Product.css';
import { ProductModal } from '../ProductModal/ProductModal';

export const Product = ({ id, title, img, price, additional }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <li className='products__item'>
      <a className='prodict__link' href="#" onClick={openModal} aria-label={`Открыть модальное окно для ${title}`}>
        <article className='product'>
          <img className='product__img' src={`${API_URL}${img}`} alt={title} />
          <div className='product__content'>
            <h3 className='product__title'>{title}</h3>
            <p className='product__price'>{price}&nbsp;₽</p>
          </div>
        </article>
      </a>
      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={{ id, title, img, price, additional }} />
    </li>
  );
};
