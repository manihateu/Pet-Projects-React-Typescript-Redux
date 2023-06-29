import styles from './CartProductComponent.module.scss';
import { CartProduct } from '../../store/reducers/cartReducer';
import { removeProductFromCart } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import React from 'react';

interface CartItemProps {
  product: CartProduct;
}

const CartProductComponent: React.FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <div className={styles.cart}>
      <img
        className={styles.cart__image}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.cart__content}>
        <h2 className={styles.cart__title}>{product.title}</h2>
        <div className={styles.cart__price}>
          <div className={styles.cart__info}>
            <div>${product.price}</div>
            <div className="">count {product.count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductComponent;
