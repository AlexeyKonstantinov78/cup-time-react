import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.css';
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
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Link className={s.header__logoLink} to='/'>
          <img
            className={s.header__logo}
            src='img/logo.svg'
            alt='Логотип cup-time'
          />
        </Link>
        <nav className={`${s.header__nav} ${isMenuOpen ? s.active : ""}`}>
          <ul className={s.header__menu}>
            {categoryTitles.map((categoryTitle) =>
            (<li key={categoryTitle.value} className={s.header__menuItem}>
              <Link
                className={`${s.header__menuLink} ${s[getActiveClass(`${categoryTitle.value}`)]}`}
                to={`/products?category=${categoryTitle.value}`}
                onClick={closeMenu}
              >
                {categoryTitle.title}
              </Link>
            </li>)
            )}
          </ul>

          <button className={s.header__closeBtn} onClick={closeMenu}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.28174" y="7.07532" width="20" height="1" transform="rotate(45 7.28174 7.07532)" fill="#D9D9D9" />
              <rect x="6.5752" y="21.2173" width="20" height="1" transform="rotate(-45 6.5752 21.2173)" fill="#D9D9D9" />
            </svg>
          </button>
        </nav>

        <div className={s.header__control}>
          <Link className={s.header__cartLink} to='/cart'>
            {cart ? cart.length : 0}
          </Link>
          <button className={s.header__burger} aria-label='Открыть бургер меню' onClick={openMenu}>
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
