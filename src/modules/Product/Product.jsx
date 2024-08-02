import { API_URL } from '../../const';
import './Product.css';

export const Product = ({ title, img, price }) => {
  return (
    <li className='products__item'>
      <article className='product'>
        <img className='product__img' src={`${API_URL}${img}`} alt={title} />
        <div className='product__content'>
          <h3 className='product__title'>{title}</h3>
          <p className='product__price'>{price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  );
};
