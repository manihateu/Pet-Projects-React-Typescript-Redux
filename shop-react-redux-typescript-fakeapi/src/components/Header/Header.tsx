import styles from './Header.module.scss';
import { toggleSidebar } from '@/src/store/actions';
import { useDispatch } from 'react-redux';
import React from 'react';
import Image from 'next/image';
import cardIcon from '../icons/cardIcon.svg'
import heartIcon from '../icons/heartIcon.svg'

type Props = {};

const Header = (props: Props) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <header className={styles.header}>
      <h1>
        <span>React</span>Shop
      </h1>
      <div className={styles.header__buttons}>
        <button className={styles.header__button} onClick={handleToggleSidebar}>
          <Image className={styles.header__icon} src={cardIcon} alt="Icon" width={16} height={16}/>        
        </button>
        <button className={styles.header__button}>
          <Image className={styles.header__icon} src={heartIcon} alt="Icon" width={16} height={16}/>        
        </button>
      </div>
    </header>
  );
};

export default Header;
