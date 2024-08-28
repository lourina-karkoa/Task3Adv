import React from 'react'
import Navbar from '../../component/NavBar/NavBar'
import Hero from '../../component/Hero/Hero'
import Offer from '../../component/Offer/Offer'
import Footer from '../../component/Footer/Footer'
import PropertySection2 from '../../component/PropertySection2/PropertySection2'

export default function PropertyDetalis() {
  const info={h2:'HOME / SINGLE PROPERTY',h1:'SINGLE PROPERTY'}
  return (
    <section className='lk-PropertyDetalis'>
        <Navbar/>
        <Hero info={info}/>
        <PropertySection2 />
        <Offer/>
        <Footer center={true}/>
    </section>
  )
}
