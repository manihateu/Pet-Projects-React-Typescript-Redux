import type { InferGetStaticPropsType } from 'next';
import Home, { Product } from '@/src/components/Home/Home';
import { fetchProducts } from '@/src/store/actions';
import Sidebar from '@/src/components/Sidebar/Sidebar';
import Header from '@/src/components/Header/Header';
import { wrapper } from '@/src/store/store';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchProducts());
  const { products } = store.getState().products;

  return {
    props: {
      products,
    },
  };
});

const index = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Home products={products} />
      </div>
    </div>
  );
};

export default wrapper.withRedux(index);
