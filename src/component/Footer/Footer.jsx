import React from 'react'
import './Footer.css'

export default function Footer({center}) {
  return (
   <>
    <div className='lk-Footer'>
    </div>
    <div className='lk-footer-box' style={{justifyContent : center ? 'center' : ''}} >
    <p className='lk-Footer-par-o'>
    Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: TemplateMo Distribution:

        </p>
    </div>
   
   </>
  )
}
