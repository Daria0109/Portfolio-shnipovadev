import React from "react";
import {Link} from "react-scroll";
import s from './../Nav.module.scss'

const MenuLink = React.memo(({linkName, className}) => {
  return (
    <Link className={className}
          activeClass={s.active}
          to={linkName}
          spy={true}
          smooth={true}
          duration={500}
    >{linkName}</Link>
  )
})
export default MenuLink;
