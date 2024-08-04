import { Link, useSearchParams } from 'react-router-dom';
import './Promo.css';

export const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className="promo">
      <div className="container promo__container">
        <h1 className="promo__title">Попробуй новый вкус Арабики</h1>
        {category !== 'coffee' ? (
          <Link className="promo__link" to="/products?category=coffee">Перейти к кофе</Link>
        ) : <div className='promo__block'></div>}
      </div>
    </section>
  );
};
