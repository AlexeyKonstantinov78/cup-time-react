import './Products.css';
import { Product } from '../Product/Product';
import { products } from '../../products';

export const Products = () => {
  return (
    <section className="products">
      <div className="container products__container">
        <h2 className="products__title">Чай</h2>
        <ul className="products__list">
          {
            products.map(product => <Product key={product.id} {...product} />)
          }
        </ul>
      </div>
    </section>
  );
};
