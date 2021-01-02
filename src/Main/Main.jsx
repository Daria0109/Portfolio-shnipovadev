import React, {useState, useCallback} from 'react';
import s from './Main.module.scss';
import Nav from "../Nav/Nav";
import photo from './../common/assets/avatar.jpg'
import Button from "../common/Button/Button";
import {FaBriefcase, FaDownload} from "react-icons/all";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import uploadedFileLink from './../files/JuniorQA_DariaShnipova.pdf'

function Main() {
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
  }, [])

  // const hideMenu = useCallback(() => {
  //   setMenuVisible(false)
  // }, [])
  return (
    <div className={s.mainBlock} id='Home'>
     <div className={s.fixedWrapper}>
       <ToggleMenu menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
       <Nav menuVisible={menuVisible} navLinks={navLinks} handleMenu={handleMenu}/>}
     </div>
        <div className={s.greeting}>
          <div className={s.photo}>
            <img src={photo} alt="photo"/>
          </div>
          <div className={s.textRight}>
            <span className={s.hello}>Hello</span>
            <h1 className={s.name}>I'm <span>Daria Shnipova</span></h1>
            <h4 className={s.positionTitle}>Frontend Developer</h4>
            <p className={s.info}>
              With over 5+ years of job experience.
              I studied Information Technology at University and later honed
              my skills through commercial and freelance experience.
              My skills include PHP, Laravel, jQuery, database design,
              JavaScript and MySQL.
            </p>
            <div className={s.buttons}>
              <a className={s.buttonLink} href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
              <Button name='Download my CV' icon={<FaDownload color='white' size={'15px'}/>}/>
              </a>
              <a className={s.buttonLink} href='#Portfolio' onClick={() => handleMenu(3)}>
             <Button name='Portfolio' icon={<FaBriefcase color='white' size={'15px'}/>}/>
              </a>
            </div>
          </div>
        </div>


      </div>
  )
}

export default Main;