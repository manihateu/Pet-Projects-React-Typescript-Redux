import { addProductToCart } from '../../store/actions';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  cardId: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  cardId,
  title,
  description,
  price,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      id: cardId,
      title,
      description,
      price,
      image: imageUrl,
      count: 1,
    };

    dispatch(addProductToCart(product));
  };

  return (
    <div className={styles.card}>
      <Image
          src={imageUrl}
          alt={title}
          className={styles.card__image}
          width={300}
          height={250}
        />
      <div className={styles.card__content}>
        <Link className={styles.link} href={`/product/${cardId}`}>
          <h2 className={styles.card__title}>{title}</h2>
          <p className={styles.card__description}>{description}</p>
        </Link>
        <div className={styles.card__price}>
          <div>${price}</div>
          <button className={styles.card__button} onClick={handleAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.card__button__icon}
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
