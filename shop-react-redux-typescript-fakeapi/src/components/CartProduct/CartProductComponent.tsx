import React from 'react'
import {CartProduct} from "../../reducers/cartReducer"
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../actions/actions';
import "../../styles/CartProductComponent.scss"

interface CartItemProps {
    product: CartProduct;
  }

const CartProductComponent: React.FC<CartItemProps> = ({product}) => {
    const dispatch = useDispatch();

  const handleRemoveFromCart = (id:string) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <div className="cart">
        <img className="cart__image" src={product.image} alt={product.title} />
        <div className="cart__content">
          <h2 className="cart__title">{product.title}</h2>
          <div className="cart__price">
            <div className="cart__info">
              <div>${product.price}</div>
              <div className="">count {product.count}</div>
            </div>
            <button className="cart__button" onClick={() => {handleRemoveFromCart(product.id)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cart__button__icon" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  )
}

export default CartProductComponent