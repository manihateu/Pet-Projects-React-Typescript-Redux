import React from 'react'
import "../../styles/Header.scss"
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../actions/actions';

type Props = {}

const Header = (props: Props) => {
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
      dispatch(toggleSidebar());
    };
  return (
    <header className="header">
        <Link to={ROUTES.HOME}>
            <h1><span>React</span>Shop</h1>
        </Link>
        <div className="header__buttons">
                <button className="header__button" onClick={handleToggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header__icon" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            <Link to={ROUTES.WISHLIST}>
                <button className="header__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header__icon" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </button>
            </Link>
        </div>
    </header>
  )
}

export default Header