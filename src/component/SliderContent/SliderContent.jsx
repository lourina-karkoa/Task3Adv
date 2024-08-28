import React from 'react'
import './SliderContent.css'

export default function SliderContent({activeIndex,iamgeSlide}) {
  return (
    <section>
        {iamgeSlide.map((slide,index)=>{
            return(
                <div className={index === activeIndex ? 'slides actives' : 'inactive'}>
                    <img className='home-slide-img' src={slide.url}/>
                    <div className='lk-home-hero-par'>
                       <h3 className='home-slide-title-h3'>{slide.title}<span className=''>{slide.span}</span></h3>
                       <h2 className='home-slide-title-h2'>{slide.discription}</h2>
                    </div>
                </div>
            )
        })}
    </section>
  )
}
