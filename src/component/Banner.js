import React from 'react'
import img1 from './Bannerimg/img1.jpg'
import img2 from './Bannerimg/img3.jpg'
import img3 from './Bannerimg/img4.jpg'
import './Banner.css'

export default function Banner() {
  return (
    <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src={img1} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={img2}className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={img3} className="d-block w-100" alt="..."/>
                  </div>
              </div>
              <button className="carousel-control-prev banner-btn" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next banner-btn" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </button>
          </div>
    </div>
  )
}
