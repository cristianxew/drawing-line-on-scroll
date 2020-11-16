import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BrandLogo from "../BrandLogo/BrandLogo"
import logos from "../../constans/logos"
import "./Slider.css"

const BrandSlider = () => {
  var settings = {
    className: "slider-container",
    accessibility: false,
    dots: false,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 3700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {logos.map(item => {
        const { id, logo } = item
        return <BrandLogo logo={logo} key={id} />
      })}
    </Slider>
  )
}

export default BrandSlider
