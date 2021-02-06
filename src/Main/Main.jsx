import React, {useState, useCallback} from 'react';
import s from './Main.module.scss';
import Nav from "../Nav/Nav";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import Greeting from "./Greeting/Greeting";
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';

const particlesOpt = {
  'particles': {
    'number': {
      'value': 150,
      'density': {
        'enable': true,
        'value_area': 1000
      }
    }
  }
}

const Main = React.memo(() => {

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

  return <div className={s.preMainBlock}>
    <Particles className={s.particles} params={particlesOpt}/>
      <div className={s.mainBlock} id='Home'>
        <div className={s.fixedWrapper}>
          <ToggleMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
            <Nav menuVisible={menuVisible} navLinks={navLinks} handleMenu={handleMenu}/>
        </div>
        <Fade>
        <Greeting handleMenu={handleMenu}/>
        </Fade>
      </div>

  </div>
})

export default Main;