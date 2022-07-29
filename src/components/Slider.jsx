import React from 'react'
import img1 from '../images/1920x680.png'
import { v4 as uuidv4 } from 'uuid'

const Slider = () => {
  const sliderContent = [
    {
      imageURL: img1,
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      imageURL: img1,
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      imageURL: img1,
      text: 'Lorem ipsum dolor sit amet.',
    },
  ]

  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          {sliderContent.map((item, index) =>
            index === 0 ? (
              <button
                key={uuidv4()}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            ) : (
              <button
                key={uuidv4()}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                aria-current="true"
              ></button>
            )
          )}
        </div>
        <div className="carousel-inner">
          {sliderContent.map((item, index) =>
            index === 0 ? (
              <div key={uuidv4()} className="carousel-item active">
                <img
                  key={uuidv4()}
                  src={item.imageURL}
                  className="d-block w-100"
                  alt={item.imageURL}
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
                  <p key={uuidv4()}>{item.text}</p>
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="carousel-item">
                <img
                  key={uuidv4()}
                  src={item.imageURL}
                  className="d-block w-100"
                  alt={item.imageURL}
                />
                <div
                  key={uuidv4()}
                  className="carousel-caption d-none d-md-block"
                >
                  <p key={uuidv4()}>{item.text}</p>
                </div>
              </div>
            )
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
