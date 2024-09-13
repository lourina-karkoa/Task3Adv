import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import {dataNavBar} from './../../data/DataNavbar'
import Button from '../Button/Button'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
export default function Navbar() {

  const dataNavIcon =[{id:'1',icon:faFacebook},{id:'2',icon:faTwitter},{id:'3',icon:faLinkedin},{id:'4',icon:faInstagram}]
  const titleWebSite ='VILLA';
  const dataNavTempr =[{id:'1',icon:faEnvelope,to:'#',link:'info@company.com'},{id:'2',icon:faMap,to:'##',link:'Sunny Isles Beach, FL 33160'}]

  const [bars,setBars] =useState(false)
  const [stylenav ,setStylenav]=useState(false)
  function ChangeStyle() {
      if (window.scrollY >= 50){
          setStylenav(true)
      }else{
          setStylenav(false)
      }
  }
  window.addEventListener('scroll', ChangeStyle);
 
  return (
    <nav className='LK-Father-Nav'>
      <div className='lk-Nav-desktop'>
      <div className='LK-nav'>
        <div className='LK-son-O'>
          {dataNavTempr.map((item)=>{
            return(
              <div className='lk-Son-O-O' key={item.id}>
              <FontAwesomeIcon  className='lk-Son-O-O-icon' icon={item.icon}/>
              <Link to={item.to} className='lk-nav-par-O'>{item.link}</Link>
            </div>
            )
          })}
        </div>
        <div className='LK-son-T'>
          {dataNavIcon.map((item)=>{
            return(
              <div className='lk-son-T-O' key={item.id}>
               <FontAwesomeIcon className='lk-son-T-icon' icon={item.icon}/>
              </div>
            )
          })}
        </div>
      </div>
      <div className={stylenav  ? 'LK-NAV-Secound-Scroll': 'LK-NAV-Secound'}>
        <h1 className='LK-NAV-Secound-h1'>{titleWebSite}</h1>
        <FontAwesomeIcon onClick={()=>{setBars(!bars)}} className='lk-hamburger-icon' icon={faBars} />
        <div className='lk-nav-new'>
           <div className='lk-nav-s-o'>
             <ul className='lk-nav-ul'> 
               {dataNavBar.map((item)=>{
                  return(
                    <li key={item.id}>
                       <NavLink to={item.path}
                       className={({ isActive })=>{
                       return(isActive ? 'lk-nav-li-link-active' : 'lk-nav-li-link');
                       }}>
                      {item.title}
                      </NavLink> 
                    </li>
                  )
                 })}
            </ul>
           </div>
       <Button something={false} />
       </div>
     </div>
      </div>
      <div className={bars ? 'lk-nav-hamburger' : 'lk-nav-hamburger-false'}>
        <ul className='lk-nav-hamburger-ul'> 
          {dataNavBar.map((item)=>{
            return(
              <li key={item.id}>
                <NavLink to={item.path}
                 className={({ isActive })=>{
                return(isActive ? 'lk-nav-li-link-active' : 'lk-nav-li-link');
                }}>
                {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div> 
    </nav>
  )
}
