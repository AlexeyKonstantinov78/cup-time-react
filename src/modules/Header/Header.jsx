import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';


export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categoryTitles } = useProducts();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      'category'
    );

    return currentCategory === category ? 'active' : '';
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <Link className='header__logo-link' to='/'>
          <img
            className='header__logo'
            src='img/logo.svg'
            alt='Логотип cup-time'
          />
        </Link>
        <nav className='header__nav'>
          <ul className='header__menu'>
            {categoryTitles.map((categoryTitle) =>
            (<li key={categoryTitle.value} className='header__menu-item'>
              <Link
                className={`header__menu-link ${getActiveClass(`${categoryTitle.value}`)}`}
                to={`/products?category=${categoryTitle.value}`}>
                {categoryTitle.title}
              </Link>
            </li>)
            )}
          </ul>
        </nav>
        <Link className='header__cart-link' to='/cart'>
          {cart ? cart.length : 0}
        </Link>
      </div>
    </header>
  );
};
