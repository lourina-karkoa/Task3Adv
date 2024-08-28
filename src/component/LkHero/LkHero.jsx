import React, { act, useEffect, useState } from 'react'
import './LkHero.css'
import SliderContent from '../SliderContent/SliderContent'
import Arrow from '../Arrow/Arrow'
import {iamgeSlide} from './../../data/data'
import Dots from '../Dots/Dots'

const len = iamgeSlide.length -1;

export default function LkHero() {
  

    const[activeIndex,setActiveIndex]=useState(0)

    return (
       <div className='home-slider-container'>
        <SliderContent activeIndex={activeIndex} iamgeSlide={iamgeSlide} />
        <Arrow prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex -1)}
               nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex +1)}/>
        <Dots activeIndex={activeIndex} iamgeSlide={iamgeSlide} onclick={activeIndex => setActiveIndex(activeIndex)}/>
       </div>
)
}