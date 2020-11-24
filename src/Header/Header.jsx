import React from 'react';
import s from './Header.module.css'
import Nav from "./Nav/Nav";
import styleContainer from '../common/styles/containerStyles.module.css';

function Header() {
  return (
    <div className={s.headerBlock}>
      <div className={`${styleContainer.container}`}>
        <Nav/>
      </div>
    </div>
  )
}

export default Header;