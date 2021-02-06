import React from 'react';
import s from './Nav.module.scss';
import MenuLink from "./MenuLink/MenuLink";


const links = [
  {link: 'Home'},
  {link: 'Skills'},
  {link: 'Portfolio'},
  {link: 'Contacts'}
]

const Nav = React.memo(({menuVisible}) => {
  const menuStyle = menuVisible ? `${s.menuArea} ${s.visible}` : `${s.menuArea}`
  const linkElements = links.map(l => {
    return <li key={l.link} className={s.navItem}>
      <MenuLink className={s.navLink}
                linkName={l.link}/>
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

