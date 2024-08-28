import React from 'react'
import PropertyCard from '../PropertyCard/PropertyCard'
import villa from './../../assets/img/img.jpg'
import Accordione from '../Accordione/Accordione'
import './PropertySection2.css'
export default function PropertySection2() {
  const accordion = [
    {
        id: '1',
        question: 'Best useful links?',
        title: "Dolor",
        spanS: 'almesit amet, ',
        title2: ` consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur `,
        spanB: ' adipiscing ',
        title3: ' elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..'
    },
    { id: '2', question: 'How does this work?', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' },
    { id: '3', question: 'Why is Villa agency the best', title: 'TemplateMo provides you the best free CSS templates Please tell your friends about it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' }
];
  return (
    <section className='PropertySection2'>
        <div className='PropertySection2-partO'>
            <div className='PropertySection2-partO-image'>
            <img className='PropertySection2-img' src={villa} alt='villa' />
            </div>
        <div className='PropertySection2-partT'>
            <div className='PropertySection2-partT-o'>
            <button className='PropertySection2-partT-Button'>Apparment</button>
                <h2 className='PropertySection2-partT-h2'>
                   24 New Street Miami, OR 24560
                </h2>
             </div>
            <p className='PropertySection2-partT-p'>
            Get <span className='span-strong'> the best villa agency </span> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <span className='span-blow'>best free CSS templates</span> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
            </p>
            <p className='PropertySection2-partT-p'>
            When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
            </p>
            <div className='PropertySection2-part-TH'>
            <Accordione  accordion={accordion} span={false}/>
            </div>
            </div>
        </div>
        <div className='PropertySection2-card'>
        <PropertyCard/>
        </div>
    </section>
  )
}
