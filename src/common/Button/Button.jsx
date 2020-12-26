import React from 'react';
import s from './Button.module.scss'



const Button = ({name, icon}) => {
  return (
    <a className={s.buttonLink} href='#'>
      <div className={s.button}>
        <span className={s.icon}>{icon}</span>
        <span className={s.name}>{name}</span>
      </div>
    </a>
  )
}
export default Button;