import React from 'react'
import './carousel.css';


export default function Carousel() {
  return (
    <>
    <div className="container text-center carousel-container">
  <div className="row carousel-row-left">
    <div className="col-4 ">
    <h2 className='carousel-container-left'>
    Choose from a variety of our electric vehicles, all at the lowest cost possible
    </h2>
    </div>

    <div className="col">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../src/assets/images/bmw-i4.jpeg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="../../src/assets/images/bmw-i4.jpeg" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="../../src/assets/images/bmw-i4.jpeg" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  </div>
  </div>
    </>
  )
}
