import React, {useState, useCallback} from 'react';
import s from './Nav.module.scss';


const Nav = React.memo(({menuVisible, handleMenu, navLinks}) => {

  const menu = menuVisible ? `${s.menuArea} ${s.visible}` : `${s.menuArea}`
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

  return (
    <div className={menu}>
      <nav className={s.navbar}>
        <ul className={s.navbarLinks}>
          {linkElements}
        </ul>
      </nav>
    </div>
  )
})

const MenuLink = React.memo(({className, id, href, handleMenu, linkName}) => {
  return <a className={className}
            id={id}
            href={href}
            onClick={() => handleMenu(id)}>{linkName}</a>
})
export default Nav;