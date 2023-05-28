// Sidebar.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { toggleSidebar } from '../../actions/actions';
import "../../styles/Sidebar.scss"
import Card from '../Card/Card';

const Sidebar: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar__container__close-button">
        <button className='sidebar__close-button' onClick={handleToggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>
      <div className="sidebar__content">

      </div>
    </div>
  );
};

export default Sidebar;
