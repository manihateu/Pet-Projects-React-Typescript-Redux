import { selectSideBarIsOpen } from '@/src/store/selectors/sidebarSelector';
import { selectProducts } from '@/src/store/selectors/cartProductSelector';
import CartProductComponent from '../CartProductComponent/CartProductComponent';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Sidebar.module.scss';
import { toggleSidebar } from '../../store/actions';
import closeIcon from '../icons/closeIcon.svg'
import React from 'react';
import Image from 'next/image';
import { CartProduct } from '@/src/store/reducers/cartReducer';

const Sidebar: React.FC = () => {
  const isOpen = useSelector(selectSideBarIsOpen);
  const cartProducts = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebar__container__close_button}>
        <button
          className={styles.sidebar__close_button}
          onClick={handleToggleSidebar}
        >
          <Image className={styles.header__icon} src={closeIcon} alt="Icon" width={16} height={16}/>        
        </button>
      </div>
      <div className={styles.sidebar__content}>
        {cartProducts.length === 0 ? (
          <div className={styles.empty__cart__text}>Корзина пуста</div>
        ) : (
          cartProducts.map((product: CartProduct) => (
            <CartProductComponent key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
