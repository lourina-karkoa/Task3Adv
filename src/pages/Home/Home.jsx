import React from 'react'
import Navbar from '../../component/NavBar/NavBar'
import LkHero from '../../component/LkHero/LkHero'
import Description from '../../component/Description/Description'
import Vedio from '../../component/Vedio/Vedio'
import Offer from '../../component/Offer/Offer'
import ContactUs from '../../component/ContactUs/ContactUs'
import Footer from '../../component/Footer/Footer'
import HomeCard from '../../component/HomeCard/HomeCard'

export default function Home() {
  return (
    <section className='lk-Home-puplic'>
       <Navbar />
       <LkHero/>
       <Description />
       <Vedio />
       <Offer />
       <HomeCard />
       <ContactUs />
       <Footer />
    </section>
  )
}
