import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { fetchProducts } from '../../actions/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Card from '../Card/Card';
import "../../styles/Home.scss"

type Props = {}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home: React.FC = (props: Props) => {
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="products__container">
        {products.map((product: Product) => (
          <Card title={product.title} description={product.description} price={product.price} key={product.id} imageUrl={product.image}/>
        ))}
      </div>
    </div>
  );
}

export default Home