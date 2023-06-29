import styles from './Home.module.scss';
import Card from '../Card/Card';
import React from 'react';

type Props = {
  products: Product[];
};

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home = ({ products }: Props) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className={styles.products__container}>
        {products.map((product: Product) => (
          <Card
            title={product.title}
            description={product.description}
            cardId={product.id.toString()}
            price={product.price}
            key={product.id}
            imageUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
