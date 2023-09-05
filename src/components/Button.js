import React from 'react'
import './Button.css'

function Button({symbol,color,handleClick}) {
  return (
    <div className='button-wrapper' style={{backgroundColor : color}}>{symbol}</div>
  )
}

export default Button