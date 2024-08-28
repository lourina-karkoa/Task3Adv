import React, { useContext } from 'react'
import './Form.css'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import ButtonForm from '../ButtonForm/ButtonForm'
import { styleContext } from '../ContactUsSection2/ContactUsSection2'
export default function Form({inputData}) {
  const add =useContext(styleContext)
  return (
         <form className={add ? 'lk-contact-form-add' : 'lk-contact-form'}>
                {inputData.map((item)=>{
                    return(
                        <>
                        <Input label={item.label} placeholder={item.placeholder} key={item.id}/>
                        </>
                    )
                })}
                
                <Textarea/>
                <ButtonForm/>
              


            </form>
  )
}
