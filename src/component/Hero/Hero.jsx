import React from 'react'
import './Hero.css'

export default function Hero({info}) {
  return (
    <section className='HeroCommon'>
        <div className='HeroCommon-Box'>
            <h2 className='HeroCommon-h2'>{info.h2}</h2>
            <h1 className='HeroCommon-h1'>{info.h1}</h1>
        </div>

    </section>
  )
}
