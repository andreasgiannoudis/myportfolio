import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

function SliderFrontend() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="slider-frontend">
      <Slider {...settings}>
        <div className="slide-item"><FaHtml5 size={50} /></div>
        <div className="slide-item"><FaCss3Alt size={50} /></div>
        <div className="slide-item"><FaSass size={50} /></div>
        <div className="slide-item"><FaJs size={50} /></div>
        <div className="slide-item"><FaReact size={50} /></div>
        <div className="slide-item"><SiNextdotjs  size={50} /></div>
      </Slider>
    </div>
  );
}

export default SliderFrontend;
