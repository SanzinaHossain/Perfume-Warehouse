import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Banner.css"
import pic1 from "../../Images/Banner/pic-1.jpg"
import pic2 from "../../Images/Banner/pic-2.jpg"
import pic3 from "../../Images/Banner/pic-3.jpg"
const Banner = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="w-100 banner-img"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100 banner-img"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='w-100 banner-img'
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Banner