import React from 'react'
import './Input.css'
import {styleContext} from './../ContactUsSection2/ContactUsSection2'
import { useContext } from 'react'
export default function Input({label,placeholder}) {
  const add =useContext(styleContext)
  return (
    <div className='Input'>
        <label className='lk-contact-form-lable'>{label}</label>
        <input className={add ? 'lk-contact-form-input-add' : 'lk-contact-form-input'} type='name' placeholder={placeholder} />
    </div>
  )
}
