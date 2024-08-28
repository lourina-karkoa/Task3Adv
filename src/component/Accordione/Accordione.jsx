import React, { useState } from "react";
import "./Accordione.css";
export default function Accordione({ accordion, span }) {
  const [openaccord, setOpenaccord] = useState();

  const toggle = (index) => {
    if (openaccord === index) {
      setOpenaccord(null);
    } else {
      setOpenaccord(index);
    }
    
  };

  return (
    <section className="property-accordione">
       <div className='lk-descrip-acordion'>
          {accordion.map((item, index) => (
            <div className='lk-descrip-acordion-f'>
              <div className="lk-descrip-view">
                <button onClick={() => {toggle(item.id)}} className={openaccord === item.id  ? 'lk-descrip-view-h2-color' : 'lk-descrip-view-h2'}>{item.question}</button>
              </div>
              <p className={openaccord === item.id ? "open" : "close"}>
              {item.title}<span className='span-strong'>{item.spanS}</span>{item.title2}<span className={span ? 'span-blow' : 'span-red'}>{item.spanB}</span>{item.title3}
              </p>
        </div>
      ))}
      </div>
    </section>
  );
}
