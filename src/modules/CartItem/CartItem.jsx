import './CartItem.css';

export const CartItem = ({ id, title, image, price }) => {
  return (
    <li className="cart-item">
      <img className="cart-item__img" src={image} alt={title} />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>
        <div className="cart-item__quantity">
          <button className="cart-item__quantity-button cart-item__quantity-button_minus"></button>
          <input className="cart-item__quantity-input" type="number" value={1} />
          <button className="cart-item__quantity-button cart-item__quantity-button_plus"></button>
        </div>
        <p className="cart-item__price">{price}&nbsp;₽</p>
      </div>
    </li>
  );
};
