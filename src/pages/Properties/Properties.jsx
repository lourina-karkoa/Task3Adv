import React from 'react'
import './Properties.css'
import Hero from '../../component/Hero/Hero'
import Navbar from '../../component/NavBar/NavBar'
import PropertiesCard from '../../component/PropertiesCard/PropertiesCard'
import Footer from '../../component/Footer/Footer'

export default function Properties() {
  const info={h2:'HOME / PROPERTIES',h1:'PROPERTIES'}
  return (
    <div className='lk-properties'>
        <Navbar />
        <Hero info={info}/>
        <PropertiesCard />
        <Footer center={true}/>
    </div>
  )
}
