import {CgClose, CgMenu} from "react-icons/cg";
import s from './ToggleMenu.module.scss'

const ToggleMenu = ({menu, setMenu}) => {
  return (
    <div className={s.toggleMenu} onClick={() => setMenu(!menu)}>
      {menu
        ? < CgClose color={'white'} size={'30px'}/>
        : <CgMenu color={'white'} size={'30px'}/>}
    </div>
  )
}
export default ToggleMenu;


