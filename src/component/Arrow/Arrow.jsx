import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import './Arrow.css'

export default function Arrow({prevSlide,nextSlide}) {
  return (
    <div className='arrows'>
        <div className='hero-father-icon' onClick={prevSlide}>
             <FontAwesomeIcon  className='prev' icon={faChevronLeft} />
         </div>
         <div className='hero-father-icon' onClick={nextSlide}>
             <FontAwesomeIcon  className='next' icon={faChevronRight} />
         </div>
    </div>
  )
}
