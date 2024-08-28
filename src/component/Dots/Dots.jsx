import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle } from '@fortawesome/free-solid-svg-icons'
import './Dots.css'
export default function Dots({activeIndex, onclick, iamgeSlide}) {
  return (
    <div className='all-dots'>
        {iamgeSlide.map((slide,index)=>{
            return(
              <FontAwesomeIcon key={index} className={activeIndex === index ? 'active-dot' : 'dot' }  
              onClick={()=>{onclick(index)}} icon={faCircle} />
            )
        })}

    </div>
  )
}
