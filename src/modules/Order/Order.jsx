import { useOrder } from '../../context/OrderContext';
import s from './Order.module.css';

export const Order = () => {
  const { orderDetails, updateOrderDetails } = useOrder();

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateOrderDetails(name, value);
  };

  return (
    <section className={s.order}>
      <div className={`container ${s.order__container}`}>
        <h2 className={s.order__title}>Доставка</h2>

        <form className={s.order__form}>
          <input
            className={s.order__input}
            type='text'
            name='name'
            placeholder='Имя'
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className={s.order__input}
            type='text'
            name='phone'
            placeholder='Телефон'
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className={s.order__input + ' ' + s.order__input_address}
            type='text'
            name='address'
            placeholder='Адрес'
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className={s.order__payment}>
            <h3 className={s.order__paymentTitle}>Оплата:</h3>

            <label className={s.order__paymentLabel}>
              <input
                className={s.order__radio}
                type='radio'
                name='payment'
                value='card'
                checked={orderDetails.payment === 'card'}
                onChange={handleChange}
              />{' '}
              Картой
            </label>
            <label className={s.order__paymentLabel}>
              <input
                className={s.order__radio}
                type='radio'
                name='payment'
                value='cash'
                checked={orderDetails.payment === 'cash'}
                onChange={handleChange}
              />{' '}
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
