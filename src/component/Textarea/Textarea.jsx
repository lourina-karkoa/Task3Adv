import React from 'react'
import './Textarea.css'
export default function Textarea() {
  return (
    <div className='Textarea-form'>
        <label className='lk-contact-form-lable'>Message</label>
        <textarea className='lk-contact-textarea' placeholder='Your Massage'></textarea>
    </div>
  )
}
