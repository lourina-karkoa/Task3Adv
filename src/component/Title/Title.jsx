import React from 'react'
import './Title.css'
export default function Title({start,card,added,titleO,titleT}) {
  return (
    <div className='lk-Title-common'>
           <div className={added ? 'lk-contact-title' : ''} style={card ? {textAlign:'center'}:{}}>
           <h3 className={start ? 'lk-contact-img-h3 h3-start' : 'lk-contact-img-h3'} >{titleO}</h3>
           <h2 className={added ? 'lk-contact-img-h2' : 'lk-contact-img-h2-color'}>{titleT}</h2>
           </div>

    </div>
  )
}
