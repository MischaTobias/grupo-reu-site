import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";

export const Carousel = ({ slides }) => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-item animate__animated animate__fadeInDown animate__faster"
          >
            <img className="slide-image" src={slide.image} alt={slide.title} />
            <div className="carousel-text">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
