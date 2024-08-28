import React, { createContext } from 'react'
import Title from '../Title/Title'
import ContactCard from '../ContacCard/ContactCard'
import Form from '../Form/Form'
import Ifram from '../Ifram/Ifram'
import {inputData} from './../ContactUs/ContactUs'
import {ContactData} from './../ContactUs/ContactUs'
import './ContactUsSection2.css'


export const styleContext =createContext(null);

export default function ContactUsSection2() {
   const add =true;
   const contactUsTitlt =[{h3:'| CONTACT US',h2:'Get In Touch With Our Agents'}]
  return (
    <div className='ContactUsSection2'>
       <div className='ContactUsSection2-part'>
            <div className='ContactUsSection2-part-one'>
                <Title start={true} added={false} titleO={'| CONTACT US'} titleT={'Get In Touch With Our Agents'}/>
                <p className='ContactUsSection2-p'>
                When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                </p>
                <ContactCard ContactData={ContactData} added={true}/>
            </div>
            <div className='ContactUsSection2-part-two'>
                <styleContext.Provider value={add} >
                   <Form inputData={inputData}/>
                </styleContext.Provider>
    
            </div>
       </div>
       <div className='ContactUsSection2-ifram'>
          <Ifram/>
       </div>
    </div>
  )
}
