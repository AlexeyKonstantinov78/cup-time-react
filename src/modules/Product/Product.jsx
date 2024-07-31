export const Product = ({ title, image, price }) => {
  return (
    <li className="products__item">
      <article className="product">
        <img className="product__img" src={image} alt={title} />
        <div className="product__content">
          <h3 className="product__title">{title}</h3>
          <p className="product__price">{price}&nbsp;₽</p>
        </div>
      </article>
    </li>
  );
};
