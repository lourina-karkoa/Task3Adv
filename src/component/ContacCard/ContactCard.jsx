import React from 'react'
import './ContactCard.css'
export default function ContactCard({ContactData,added}) {
    
  return (
    <div className={added ? 'ContactCard-ContactUs-added' : 'ContactCard-ContactUs'}>
          {ContactData.map((item)=>{
                        return(
                            <div className="lk-contactUs-card-s" key={item.id}>
                        <img className='lk-contact-card-img' src={item.src}/>
                        <div className='lk-contact-info'>
                            <h2 className='lk-contact-info-h4'>{item.h2}</h2>
                            <h4 className='lk-contact-info-h5'>{item.h4}</h4>
                        </div>
                    </div>
                        )
                    })}
    </div>
  )
}
