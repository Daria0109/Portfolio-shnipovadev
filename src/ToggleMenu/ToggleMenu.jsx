import React from "react";
import s from './ToggleMenu.module.scss'

const ToggleMenu = React.memo(({menuVisible, setMenuVisible}) => {
  const activeMenuStyle = menuVisible ? s.active : ''
  return <div className={`${s.toggleMenu} ${activeMenuStyle}`} onClick={() => setMenuVisible(!menuVisible)}>
     <span></span>
    </div>
})
export default ToggleMenu;


