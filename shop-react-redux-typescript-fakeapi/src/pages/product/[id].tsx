import { fetchPageProduct } from '@/src/store/actions/ProductPageAction';
import { Product } from '@/src/store/reducers/productReducer';
import styles from './ProductPage.module.scss';
import { wrapper } from '@/src/store/store';
import Image from 'next/image';

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const id = params?.id as string;
      if (!id) {
        return {
          notFound: true,
        };
      }

      await store.dispatch(fetchPageProduct(id));
      const product = store.getState().product;

      return {
        props: {
          product,
        },
      };
    }
);

type ProductPageProps = {
  product: Product;
};

export const getStaticPaths = () => {
  const productIds = Array.from({ length: 20 }, (_, index) =>
    (index + 1).toString()
  );

  const paths = productIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

function ProductPage({ product }: ProductPageProps) {
  return (
    <div className={styles.productPage}>
      <div className={styles.productImage}>
        <Image
          src={product.image}
          alt="Product Image"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.productInfo}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default wrapper.withRedux(ProductPage);
