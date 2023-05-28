import React from 'react';
import '../../styles/Card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../actions/actions';
import { RootState } from '../../reducers/rootReducer';


interface CardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, imageUrl }) => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: RootState) => state.cart.products);
    const handleAddToCart = () => {
      const product = {
        id: title,
        title,
        description,
        price,
        image: imageUrl,
        count: 1, // или любое другое значение по умолчанию
      };
  
      dispatch(addProductToCart(product));
    };
    

    return (
      <div className="card">
        <img className="card__image" src={imageUrl} alt={title} />
        <div className="card__content">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <div className="card__price">
            <div>${price}</div>
            <button className="card__button" onClick={handleAddToCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="card__button__icon" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
