import React from 'react'
import phone from './../../assets/img/phone.png'
import email from './../../assets/img/email.png'
import './ContactUs.css' 
import Title from '../Title/Title'
import ContactCard from '../ContacCard/ContactCard'
import Form from '../Form/Form'
import Ifram from '../Ifram/Ifram'


export  const inputData =[{id:'1',label:'Full Name',placeholder:'Your Name..'},{id:'2',label:' Email Address',placeholder:`Your E-mail..`},{id:'3',label:'Subject',placeholder:`Subject...`}]
export  const ContactData=[
  {id:'1',src:phone,h2:'010-020-0340',h4:'Phone Number'}
 ,{id:'2',src:email,h2:'info@villa.co',h4:'Business Email'}
]

export default function ContactUs() {
 
  return (
    <div className='lk-ContactUS'>
        <div className='lk-contact-ground-img'>
          <Title added={true} titleO={'| CONTACT US'} titleT={'Get In Touch With Our Agents'}/>

        </div>
       <div className='lk-contact-box'>
       <div className='lk-contact-part'>
            <div className='lk-contact-part-one'>
                <Ifram/>
                <div className='lk-contactUs-cards'>
                   <ContactCard ContactData={ContactData} added={false}/>
                   
                </div>
            </div>
             <div className='Form-Form'>
             <Form inputData={inputData}/>
             </div>
        </div>
       </div>
    </div>
  )
}
