import React from 'react'
import './Hero.css'
import { Link, NavLink } from 'react-router-dom'

export default function Hero({info}) {
  return (
    <section className='HeroCommon'>
        <div className='HeroCommon-Box'>
            <Link className='HeroCommon-link' to={'/Task3Adv'}>
            <h2 className='HeroCommon-h2'>{info.h2}</h2>
            </Link>
            <h1 className='HeroCommon-h1'>{info.h1}</h1>
        </div>

    </section>
  )
}
