import React, { useEffect, useRef } from 'react';
import { Data2 } from './ProgramData';
import "./Programpage.css"
import { type } from '@testing-library/user-event/dist/type';
import { useLocation, } from 'react-router-dom';

export default function Programspage() {
  let items = Data2.filter((item) => item.type === "Programpage")
  const { location, state } = useLocation()
  console.log(location, state)
  const TeacherRef = {item0:useRef(),
item1:useRef(),
item2:useRef(),
item3:useRef(),
  
  }
  useEffect(() => {
    console.log(state?.direct)
    if (state?.direct === "Teachers") {
      console.log("Teachers")
      window.scrollTo({ top: TeacherRef.item0.current.offsetTop, left: 0, behavior: "smooth" })
    }
  }, [])
  return (

    <div className="program-page">

      <div className="program-card" ref={TeacherRef.item0} key={type}>
        <div className="cards ">

          <h1 style={{ backgroundColor: items[0].bgc }} > {items[0].Title}</h1>
          <p>{items[0].Desc}</p>
          <ul>

            <li><i className="fas fa-star"></i>{items[0].li1}</li>
            <li><i className="fas fa-star"></i>{items[0].li2}</li>
            <li><i className="fas fa-star"></i>{items[0].li3}</li>
            <li><i className="fas fa-star"></i>{items[0].li4}</li>
            <li><i className="fas fa-star"></i>{items[0].li5}</li>
          </ul>
        </div>
        <div>

          <img className='imgW-H' src={items[0].img} alt="" srcSet="" />
        </div>
      </div>
      <div className="program-card  H-W" ref={TeacherRef.item1} key={type}  >
        <div className="cards ">

          <h1 style={{ backgroundColor: items[1].bgc }} > {items[1].Title}</h1>
          <p>{items[1].Desc}</p>
          <ul>

            <li><i className="fas fa-star"></i>{items[1].li1}</li>
            <li><i className="fas fa-star"></i>{items[1].li2}</li>
            <li><i className="fas fa-star"></i>{items[1].li3}</li>
            <li><i className="fas fa-star"></i>{items[1].li4}</li>
            <li><i className="fas fa-star"></i>{items[1].li5}</li>
          </ul>
        </div>
        <div>

          <img className='imgW-H' src={items[1].img} alt="" srcSet="" />
        </div>

      </div>
      <div className="program-card" ref={TeacherRef.item2} key={type} >
        <div className="cards ">

          <h1 style={{ backgroundColor: items[2].bgc }}> {items[2].Title}</h1>
          <p>{items[2].Desc}</p>
          <ul>

            <li><i className="fas fa-star"></i>{items[2].li1}</li>
            <li><i className="fas fa-star"></i>{items[2].li2}</li>
            <li><i className="fas fa-star"></i>{items[2].li3}</li>
            <li><i className="fas fa-star"></i>{items[2].li4}</li>
            <li><i className="fas fa-star"></i>{items[2].li5}</li>
          </ul>
        </div>
        <div>

          <img className='imgW-H' src={items[2].img} alt="" srcSet="" />
        </div>
      </div>
      <div className="program-card   " ref={TeacherRef} key={type} >
        <div className="cards ">

          <h1 style={{ backgroundColor: items[3].bgc }}> {items[3].Title}</h1>
          <p>{items[3].Desc}</p>
          <ul>

            <li><i className="fas fa-star"></i>{items[3].li1}</li>
            <li><i className="fas fa-star"></i>{items[3].li2}</li>
            <li><i className="fas fa-star"></i>{items[3].li3}</li>
            <li><i className="fas fa-star"></i>{items[3].li4}</li>
            <li><i className="fas fa-star"></i>{items[3].li5}</li>
          </ul>
        </div>
        <div>

          <img className='imgW-H' src={items[3].img} alt="" srcSet="" />
        </div>
      </div>
      <div className="program-card"  ref={TeacherRef} key={type}>
        <div className="cards ">

          <h1 style={{ backgroundColor: items[4].bgc }} > {items[4].Title}</h1>
          <p>{items[4].Desc}</p>
          <ul>

            <li><i className="fas fa-star"></i>{items[4].li1}</li>
            <li><i className="fas fa-star"></i>{items[4].li2}</li>
          </ul>
        </div>
        <div>

          <img className='imgW-H' src={items[4].img} alt="" srcSet="" />
        </div>

      </div>





    </div>


  )


}
