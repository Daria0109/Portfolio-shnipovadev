import React from 'react';
import s from './Nav.module.scss';
import MenuLink from "./MenuLink/MenuLink";


const Nav = React.memo(({menuVisible, handleMenu, navLinks}) => {
  const menuStyle = menuVisible ? `${s.menuArea} ${s.visible}` : `${s.menuArea}`
  const linkElements = navLinks.map(l => {
    const link = l.active ? `${s.navLink} ${s.active}` : `${s.navLink}`
    return <li key={l.id} className={s.navItem}>
      <MenuLink className={link}
                id={l.id}
                href={`#${l.link}`}
                linkName={l.link}
                handleMenu={handleMenu}/>
    </li>
  })

  return <div className={menuStyle}>
      <nav className={s.navbar}>
        <ul className={s.navbarLinks}>
          {linkElements}
        </ul>
      </nav>
    </div>
})
export default Nav;

