import './Products.css';
import { Product } from '../Product/Product';
// import { products } from '../../products';
import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useSearchParams } from 'react-router-dom';
import { categoryTitles } from '../../const';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get('category');
  const [title, setTitle] = useState("");

  useEffect(() => {
    setCategory(category);
    categoryTitles.forEach((categoryTitle) => {
      if (categoryTitle.value === category) {
        setTitle(categoryTitle.title);
      }
    });
  }, [category, setCategory]);

  return (
    <section className="products">
      <div className="container products__container">
        <h2 className="products__title">{title}</h2>
        <ul className="products__list">
          {
            products.map(product => <Product key={product.id} {...product} />)
          }
        </ul>
      </div>
    </section>
  );
};
