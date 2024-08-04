import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';
import { useState } from 'react';


export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categoryTitles } = useProducts();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      'category'
    );

    return currentCategory === category ? 'active' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(true);
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
        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
          <ul className='header__menu'>
            {categoryTitles.map((categoryTitle) =>
            (<li key={categoryTitle.value} className='header__menu-item'>
              <Link
                className={`header__menu-link ${getActiveClass(`${categoryTitle.value}`)}`}
                to={`/products?category=${categoryTitle.value}`}
                onClick={closeMenu}
              >
                {categoryTitle.title}
              </Link>
            </li>)
            )}
          </ul>

          <button className="header__close-btn" onClick={closeMenu}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.28174" y="7.07532" width="20" height="1" transform="rotate(45 7.28174 7.07532)" fill="#D9D9D9" />
              <rect x="6.5752" y="21.2173" width="20" height="1" transform="rotate(-45 6.5752 21.2173)" fill="#D9D9D9" />
            </svg>
          </button>
        </nav>

        <div className="header__control">
          <Link className='header__cart-link' to='/cart'>
            {cart ? cart.length : 0}
          </Link>
          <button className="header__burger" aria-label='Открыть бургер меню' onClick={openMenu}>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
