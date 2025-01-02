import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slides } from "../data/data";
import { settings } from "../data/static/staticPortion";
import "./SliderComponent.css";

const SliderComponent = () => {
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
