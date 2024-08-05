import { Link, useSearchParams } from 'react-router-dom';
import s from './Promo.module.css';

export const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <section className={s.promo}>
      <div className={`container ${s.promo__container}`}>
        <h1 className={s.promo__title}>Попробуй новый вкус Арабики</h1>
        {category !== 'coffee' ? (
          <Link className={s.promo__link} to="/products?category=coffee">Перейти к кофе</Link>
        ) : <div className={s.promo__block}></div>}
      </div>
    </section>
  );
};
