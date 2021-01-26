import React, {useState, useCallback, useEffect} from 'react';
import s from './Main.module.scss';
import Nav from "../Nav/Nav";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import Greeting from "./Greeting/Greeting";
import AOS from "aos";

const Main = React.memo(() => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      delay: 100,
      once: false,
    });
    AOS.refresh()
  }, [])

  const [menuVisible, setMenuVisible] = useState(false);
  const [navLinks, setNavLinks] = useState([
    {id: 1, link: 'Home', active: false},
    {id: 2, link: 'Skills', active: false},
    {id: 3, link: 'Portfolio', active: false},
    {id: 4, link: 'Contacts', active: false}
  ]);

  const handleMenu = useCallback((id) => {
    const newNavLinks = navLinks.map(l => {
      if (id === l.id) {
        return {...l, active: true}
      } else return {...l, active: false}
    })
    setNavLinks(newNavLinks);
    setMenuVisible(false);
  }, [navLinks])

  return (
    <div className={s.mainBlock} id='Home'>
      <div className={s.fixedWrapper}>
        <ToggleMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <Nav menuVisible={menuVisible} navLinks={navLinks} handleMenu={handleMenu}/>
      </div>
      <Greeting handleMenu={handleMenu}/>
    </div>
  )
})

export default Main;