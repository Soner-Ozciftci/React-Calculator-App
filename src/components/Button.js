import React from 'react'
import './Button.css'

function Button({symbol,color}) {
  return (
    <div className='button-wrapper' style={{backgroundColor : color}}>{symbol}</div>
  )
}

export default Button