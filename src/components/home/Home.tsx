import HomeCard from "./HomeCard";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


interface props {
  items: any
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


const Home = ({ items }: props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  };
  return (
    <>
      <div className="homeContainer">
      <Slider {...settings}>
        {items.map(( item: any ) => (
          <HomeCard key={item.id} item={item}/>
        ))}
        </Slider>
      </div>

    </>
  )
}

export default Home
