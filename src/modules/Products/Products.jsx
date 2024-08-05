import s from './Products.module.css';
import { Product } from '../Product/Product';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from '../SkeletonLoader/SkeletonLoader';
import { useProducts } from '../../context/ProductContext';

export const Products = () => {
  const scrollRef = useRef(null);
  const [searchParams] = useSearchParams();
  const { products, setCategory, categoryTitles } = useProducts();
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

  // useEffect(() => {
  //   scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  // }, [products]);

  return (
    <section className={s.products} ref={scrollRef}>
      <div className={`container ${s.products__container}`}>
        <h2 className={s.products__title}>{title}</h2>
        <ul className={s.products__list}>
          {products.length ?
            (products.map(product => <Product key={product.id} {...product} />)) :
            (<SkeletonLoader />)
          }
        </ul>
      </div>
    </section>
  );
};
