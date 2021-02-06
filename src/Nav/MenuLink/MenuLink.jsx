import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const MenuLink = React.memo(({className, id, href, handleMenu, linkName}) => {
  return <a className={className}
            id={id}
            href={href}
            onClick={() => handleMenu(id)}>{linkName}</a>
})
export default MenuLink;
