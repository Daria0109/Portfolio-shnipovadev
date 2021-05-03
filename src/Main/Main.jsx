import React, {useState} from 'react';
import s from './Main.module.scss';
import Nav from "../Nav/Nav";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import Greeting from "./Greeting/Greeting";
import Particles from 'react-particles-js';

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

  return <div className={s.preMainBlock}>
    <Particles className={s.particles} params={particlesOpt}/>
      <div className={s.mainBlock} id='Home'>
        <div className={s.fixedWrapper}>
          <ToggleMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
            <Nav menuVisible={menuVisible} />
        </div>
        <Greeting/>
      </div>

  </div>
})

export default Main;