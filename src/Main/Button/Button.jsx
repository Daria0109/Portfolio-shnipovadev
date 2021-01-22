import React from 'react';
import s from './Button.module.scss'



const Button = React.memo(({name, icon}) => {
  return (
      <div className={s.button}>
        <span className={s.name}>{icon}</span>
        <span className={s.name}>{name}</span>
      </div>
  )
})
export default Button;