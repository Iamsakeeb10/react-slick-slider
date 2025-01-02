import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "../data/data";
import "./SliderComponent.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="carousel-container">
        <h1 className="carousel-title">Our Featured Slides</h1>
        <Slider {...settings}>
          {slides.map((slide, id) => (
            <div key={id} className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <h2 className="slide-title">{slide.title}</h2>
            </div>
          ))}
        </Slider>
      </div>
      <div className="floating-container">
        <p className="floating-text">Crafted with ❤️ by Shakib</p>
      </div>
    </div>
  );
};

export default SliderComponent;
