import React from 'react';
import s from './Nav.module.scss'

function Nav() {
  return (
    <div className={`${s.menuArea} ${s.show}`}>
      <nav className={`${s.navbar} ${s.show}`}>
        <ul className={s.navbarLinks}>
          <li className={s.navItem}>
            <a className={s.navLink} href="#home">Home</a>
          </li>
          <li className={s.navItem}>
            <a className={s.navLink} href="#skills">Skills</a>
          </li>
          <li className={s.navItem}>
            <a className={s.navLink} href="#portfolio">Portfolio</a>
          </li>
          <li className={s.navItem}>
            <a className={s.navLink} href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;