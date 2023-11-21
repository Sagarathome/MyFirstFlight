import React, { useState } from 'react'
import {imgData} from './ProgramData'
import GalleryCarousel from './GalleryCarousel'
import Card2 from './Card2'
import img1 from "./Galleryimg/img1.jpg"
import img8 from "./Galleryimg/img8.jpg"
import img9 from "./Galleryimg/img9.jpg"
import "./Gallery.css"


export default function Gallery() {

    const [carousel, setCarousel] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);


    const showCarousel = (img) => {
        setSelectedImage(img)
        setCarousel(true);
    };

    const removeCarousel = () => {
        setCarousel(false);
    };

    const galleryCard=(img)=>{
     showCarousel(img)
    }


  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide Gallery-container " data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner overflow-hidn">
                  <div className="carousel-item active">
                      <img src={img1} className="d-block w-100 img" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={img8}className="d-block w-100 img" alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src={img9} className="d-block w-100 img" alt="..."/>
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
          <div className="Gallerycard" >
          {imgData.filter((item)=>item.Type==='imgdata').map((item,index) =>{ 
              return <Card2 key={item.Type}  onClick={()=>galleryCard(item)} imgData={item} />

          })}

        </div>   
      
          {carousel && (
              <GalleryCarousel selectedImage={selectedImage} removeCarousel={removeCarousel} />
          )}

    </div>
  ) 
}
