import React, { useState } from 'react'
import {dataThree} from './../../data/data'
import {dataTwo} from './../../data/data'
import {dataOne} from './../../data/data'
import Button from '../Button/Button'
import './Offer.css'
import Title from '../Title/Title'
export default function Offer() {
    const [dataTabs,setDataTabs]=useState(dataOne);
    const [toggleState,setToggleState] =useState(1);
    function toggleTap(index) {
        setToggleState(index)
    }
  return (
    <div className='lk-father-offer'>
        <div className='lk-offer-son-o'>
            <Title start={true} titleO={ '| BEST DEAL'} titleT={' Find Your Best Deal Right Now!'} />
            <div className='lk-offer-o-t'>
                <button className={toggleState === 1 ? 'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{toggleTap(1);setDataTabs(dataOne)}}>Appartmant</button>
                <button className={toggleState === 2 ?  'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{toggleTap(2);setDataTabs(dataTwo)}}>Vila House</button>
                <button className={toggleState === 3 ?  'lk-offer-o-button-add':'lk-offer-o-button'} onClick={()=>{toggleTap(3);setDataTabs(dataThree)}}>PenThouse</button>
            </div>   
        </div>
        <div className='lk-offer-son-t'>
            <div className="lk-offer-childs">
                {dataTabs[0].li.map((item,index)=>{
                    return(
                        <div className='lk-offer-child-s' key={index}>
                            <p className='lk-offer-child-s-par'>{item.p}</p>
                            <h2 className='lk-offer-child-s-h2'>{item.h2}</h2>
                        </div>
                    )
                })}
            </div>
            <div className="lk-offer-child-img">
                <img className='lk-offer-img'  src={dataTabs[0].img}/>
            </div>
            <div className="lk-offer-child">
                <h2 className='lk-offer-child-h2'>{dataTabs[0].h2}</h2>
                <p className='lk-offer-child-par'>{dataTabs[0].p1}</p>
                <p className='lk-offer-child-par'>{dataTabs[0].p2}</p>
                <Button something={true}/>
            </div>
        </div>
    </div>
  )
}
