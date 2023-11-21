import React from 'react'

export default function Card2({ imgData, onClick }) {
  const { img } = imgData
  return (
    <div>
      <div className="card Gallery-card" style={{ width: "20rem ", border: "none" }}>
        <img className="card-img-top galleryCard" onClick={onClick} style={{ objectFit: "contain" }} src={img} alt="Caraousel" />
      </div>

    </div>

  )
}
