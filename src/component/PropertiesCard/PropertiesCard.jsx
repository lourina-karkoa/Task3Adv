import React, { useState } from 'react'
import './PropertiesCard.css'
import Cards from '../Cards/Cards'
import {cardData} from './../HomeCard/HomeCard'
import pool7 from './../../assets/img/pool3.jpg'
import pool8 from './../../assets/img/pool2.jpg'
import pool9 from './../../assets/img/pool1.jpg'

let cardNewData =[...cardData,{id:'7',img:pool7,span1:'Luxury Villa',span2:'$980.000',h2:'14 Mid Street Miami, OR 36450',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['8','8','550m2','3','12 spots'],button:'Schedule a visit',category:"all"}
                ,{id:'8',img:pool8,span1:'Luxury Villa',span2:'$$1.520.000',h2:'26 Old Street Miami , OR 12870',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['12','15','380m2','3','14 spots'],button:'Schedule a visit',category:"all"}
                ,{id:'9',img:pool9,span1:'Luxury Villa',span2:'$3.145.000',h2:'34 New Street Miami, OR 24650',li:['Bedrooms:','Bathrooms:','Area: ','Floor:','Parking:'],li1:['10','12','860m2','3','10 spots'],button:'Schedule a visit',category:"all"}
            ];

export default function PropertiesCard(){

    const dataPagenation=['1','2','3','>>']
    
    const [toggleState,setToggleState] =useState(1);
    function toggleTap(index) {
        setToggleState(index)
        
    }    
    const [item ,setItem] =useState(cardNewData)
    const filterItems =(catItem)=>{
      const updateItems = cardNewData.filter((curItem)=>{
        return curItem.category === catItem
      })
      setItem(updateItems)
    }

  return (
    <section className='lk-PropertiesCard'>
        <div className='PropertiesCard-Buttons'>
            <button className={toggleState === 1 ? 'lk-propertiesCard-btn-active':'lk-propertiesCard-btn'} onClick={()=>{toggleTap(1);setItem(cardNewData)}} >Show all</button>
            <button className={toggleState === 2 ? 'lk-propertiesCard-btn-active':'lk-propertiesCard-btn'} onClick={()=>{toggleTap(2);filterItems("Apartment")}}>Apartment</button>
            <button className={toggleState === 3 ? 'lk-propertiesCard-btn-active':'lk-propertiesCard-btn'} onClick={()=>{toggleTap(3);filterItems("ModernCondo")}}>Villa House</button>
            <button className={toggleState === 4 ? 'lk-propertiesCard-btn-active':'lk-propertiesCard-btn'} onClick={()=>{toggleTap(4);filterItems("Penthouse")}}>Penhouse</button>

        </div>
        <Cards cardData={item} />
        <div className='lk-PropertiesCard-pagenation'>
          {dataPagenation.map((item,index)=>{
            return(
              <>
              <button className='lk-PropertiesCard-pagenation-button' key={index}>{item}</button>
              </>
            )
          })}
        </div>
    </section>
  )
}
