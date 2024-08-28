import React from 'react';
import featured from './../../assets/img/featured-icon.png';
import './Description.css';
import Accordione from '../Accordione/Accordione';
import PropertyCard from '../PropertyCard/PropertyCard';
import Title from '../Title/Title';

export default function Description() {
    const accordion = [
        {
            id: '1',
            question: 'Best useful links?',
            title: "Get",
            spanS: 'the best villa',
            title2: ' website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ',
            spanB: 'best free CSS templates',
            title3: 'in the world. Please tell your friends about it.'
        },
        { id: '2', question: 'How does this work?', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' },
        { id: '3', question: 'Why is Villa agency the best?', title: 'TemplateMo provides you the best free CSS templates Please tell your friends about it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' }
    ];

    return (
        <div className='lk-descrip'>
            <div className='lk-descrip-part-o'>
                <div className='lk-descrip-f-img'>
                    <img className='lk-descrip-s-img' src={featured} alt="Featured"/>
                </div>
            </div>
            <div className='lk-descrip-part-T'>
                <Title start={true} titleO={'| FEATURED'} titleT={'Best Appartment & Sea View'} />
                <Accordione accordion={accordion} span={true}/>
            </div>
            <div className='lk-descrip-Proerty-card'>
            <PropertyCard />
            </div>
        </div>
    );
}
