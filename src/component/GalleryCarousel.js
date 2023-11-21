import React from 'react';
import {imgData} from './ProgramData'
import img1 from './Bannerimg/img1.jpg';

function GalleryCarousel({removeCarousel,selectedImage}) {
    const Style = {
        width:"100%",
        display:"flex",
        justifyContent:"flex-end"
    };
   const buttonStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color:"white",
    fontWeight:"bold",
    backgroundColor:"#e26262",
    border:"none",
    position:"relative"

};

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)", // Transparent overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        // border:"2px solid red"
       
    };
    
    const containerStyle = {
        borderRadius:30,
        position: "relative", // Position relative to allow absolute positioning within
         height: "90%",
        width: "50%", // Adjust the size as needed
        background: "transparent", // Background color
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Box shadow for the modal
        padding: "10px",
        overflow:"hidden"
    };


    return (
           <div style={overlayStyle}>
        <div className='container d-flex flex-column'  style={containerStyle}>
            <div style={Style} ><button style={buttonStyle} onClick={removeCarousel}>x</button></div>
            <div id="carouselExampleSlidesOnly"  className="carousel slide" data-ride="carousel"> 
                <div className="carousel-inner">
                    <div className="carousel-item active overflow-hidden ">
                        <img className="d-block w-100  rounded-bottom  " src={selectedImage.img} alt="First slide" />
                    </div>
                </div>
            </div>
        </div>
           </div>
    );
}

export default GalleryCarousel;
