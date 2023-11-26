import React, { useEffect, useRef } from 'react';
import { Data2 } from './ProgramData';
import "./Programpage.css";
import { useLocation } from 'react-router-dom';

export default function Programspage() {
  let items = Data2.filter((item, index) => item.type === "Programpage");
  const { state } = useLocation();
  const itemRefs = items.map(() => React.createRef());

  useEffect(() => {
    if (state?.direct === "Teachers") {
      window.scrollTo({ top: itemRefs[0].current.offsetTop, left: 0, behavior: "smooth" });
    }
  }, [state]);

  return (
    <div className="program-page">
      {items.map((item, index) => (
        <div className="program-card" ref={itemRefs[index]} key={index}>
          <div className="cards" key={index}>
            <h1 style={{ backgroundColor: item.bgc }}>{item.Title}</h1>
            <p>{item.Desc}</p>
            <ul>
              <li><i className="fas fa-star"></i>{item.li1}</li>
              <li><i className="fas fa-star"></i>{item.li2}</li>
              <li><i className="fas fa-star"></i>{item.li3}</li>
              <li><i className="fas fa-star"></i>{item.li4}</li>
              <li><i className="fas fa-star"></i>{item.li5}</li>
            </ul>
          </div>
          <div>
            <img className='imgW-H' src={item.img} alt="" srcSet="" />
          </div>
        </div>
      ))}
    </div>
  );
}
