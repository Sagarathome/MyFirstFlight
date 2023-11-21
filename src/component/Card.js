import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"


export default function Card( {Data}) {
    const{Title,Desc,img,bgc,color }=Data
  return (
    <div>
      <div className="card" style={{ width: '22rem', padding: "15px 10px", height: "550px", margin: "20px 0px",backgroundColor:bgc ,color:color }} >
              <img className="card-img-top" src={img} alt={img} />
              <div className="card-body card-center">
                  <h5 className="card-title">{Title}</h5>
                  <p className="card-text">{Desc}</p>
              </div>
          <Link to="/programs"  className="btn  bttn " >Read more</Link>
          </div>
    </div>
  )
}
