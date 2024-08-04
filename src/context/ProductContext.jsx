import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../const';


const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("");

  const categoryTitles = [
    { value: 'tea', title: 'Чай' },
    { value: 'coffee', title: 'Кофе' },
    { value: 'teapots', title: 'Чайники' },
    { value: 'cezves', title: 'Турки' },
    { value: 'other', title: 'Прочее' },
  ];

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(data => setProducts(data))
        .catch(error => console.error(`Error fetchings error: ${error.message}!`));
    }
  }, [category]);

  return (
    <ProductContext.Provider value={{ products, setCategory, categoryTitles }}>
      {children}
    </ProductContext.Provider>);
};

export const useProducts = () => useContext(ProductContext);