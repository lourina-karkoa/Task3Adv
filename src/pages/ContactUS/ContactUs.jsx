import React from 'react'
import Navbar from '../../component/NavBar/NavBar'
import Hero from '../../component/Hero/Hero'
import ContactUsSection2 from '../../component/ContactUsSection2/ContactUsSection2'
import Footer from '../../component/Footer/Footer'

export default function ContactUs() {
  const info={h2:'HOME / CONTACT US',h1:'CONTACT US'}
  return (
    <section className='lk-ContactUs'>
        <Navbar/>
        <Hero info={info}/>
        <ContactUsSection2/>
        <Footer center={true}/>
    </section>
  )
}
