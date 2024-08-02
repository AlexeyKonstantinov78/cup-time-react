import './Products.css';
import { Product } from '../Product/Product';
// import { products } from '../../products';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get('category');


  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

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
