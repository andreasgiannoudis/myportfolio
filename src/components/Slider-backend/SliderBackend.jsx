import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaNodeJs, FaDatabase, FaPhp } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';

function SliderBackend() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item"><FaNodeJs size={50} /></div>
        <div className="slide-item"><FaPhp size={50} /></div>
        <div className="slide-item"><DiPostgresql size={50} /></div>
        <div className="slide-item"><FaDatabase size={50} /></div>
      </Slider>
    </div>
  );
}

export default SliderBackend;
