import React from 'react'
import './Cards.css'
export default function Cards({cardData}){
  return (
        <div className='lk-cards-father'>
           {cardData.map((item)=>{
            return(
                <div className='lk-card-son' key={item.id}>
                    <img className='lk-card-img' src={item.img} />
                    <div className='lk-card-part-o'>
                    <div className='lk-card-o-span'> 
                         <span className='lk-card-span-o'>{item.span1}</span>
                         <span className='lk-card-span-t'>{item.span2}</span></div>
                    <h2 className='lk-card-h2'>{item.h2}</h2>
                    <ul className='lk-card-ul'>
                        <li className="lk-card-li">{item.li[0]}<span>{item.li1[0]}</span></li>
                        <li className="lk-card-li">{item.li[1]}<span>{item.li1[1]}</span></li>
                        <li className="lk-card-li">{item.li[2]}<span>{item.li1[2]}</span></li>
                        <li className="lk-card-li">{item.li[3]}<span>{item.li1[3]}</span></li>
                        <li className="lk-card-li">{item.li[4]}<span>{item.li1[4]}</span></li>
                    </ul>
                    </div>
                    <button className='lk-card-button'>{item.button}</button>
                </div>
            )
           })}
        </div>
    
  )
}
