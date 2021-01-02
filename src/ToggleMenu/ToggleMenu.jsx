import {CgClose, CgMenu} from "react-icons/cg";
import s from './ToggleMenu.module.scss'

const ToggleMenu = ({menuVisible, setMenuVisible}) => {
  return (
    <div className={s.toggleMenu} onClick={() => setMenuVisible(!menuVisible)}>
      {menuVisible
        ? < CgClose color={'white'} size={'30px'}/>
        : <CgMenu color={'white'} size={'30px'}/>}
    </div>
  )
}
export default ToggleMenu;


