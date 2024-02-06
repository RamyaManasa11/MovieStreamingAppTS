import React from 'react';
import { Link } from 'react-router-dom';
import Ucard from './Ucard';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface props {
  title: any;
  items: any;
}

const SampleNextArrow = (props: any) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

const SamplePrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  )
}

const Upcomming = ({ title, items }: props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item: any) => (
                <Ucard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Upcomming
