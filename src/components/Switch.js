import React from 'react'
import "./Switch.css"
import cx from 'classnames'

function Switch({ id, rounded=false }) {

    const sliderCX = cx('slider',
    {
        'rounded': rounded   
    })

  return (
    <div className='switch'>
        <input 
            id={id} // Use the id prop to set the unique id for the checkbox
            type="checkbox" 
        />
        <label htmlFor={id} className={sliderCX} />
    </div>
  )
}

export default Switch;
