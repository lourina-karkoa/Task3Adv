import React from 'react'
import space from './../../assets/img/space1.png';
import book from './../../assets/img/book2.png';
import hoom from './../../assets/img/hoom3.png';
import control from './../../assets/img/control4.png';
import './PropertyCard.css'
export default function PropertyCard() {
    const dataPropertyCard = [
        { id: 1, img: space, title: '250 m2', par: 'Total Flat Space' },
        { id: 2, img: book, title: 'Contract', par: 'Contract Ready' },
        { id: 3, img: hoom, title: 'Payment', par: 'Payment', span: 'Process' },
        { id: 4, img: control, title: 'Safety', par: '24/7 Under', span: 'Control' }
    ];
  return (
    <div className='PropertyCard'>
          <div className='lk-descrip-part-TH'>
                {dataPropertyCard.map((item) => (
                    <div key={item.id} className='lk-descrip-Box'>


                         <div className='lk-descrip-Box-o'>
                            <img src={item.img} className='lk-descrip-Box-img' alt={item.title}/>
                            <span className='lk-descrip-Box-span'>{item.span}</span>
                        </div>
                        <div className='lk-descrip-Box-t'>
                            <h2 className='lk-descrip-Box-h2'>{item.title}</h2>
                            <p className='lk-descrip-Box-p'>{item.par}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}
