import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";

export const Carousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="/assets/gruporeuteam.jpg" alt="Image 1" />
          <div className="carousel-text">
            <h3>Item Title 1</h3>
            <p>Description of the item.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/photo2.jpg" alt="Image 2" />
          <div className="carousel-text">
            <h3>Item Title 2</h3>
            <p>Description of the item.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/assets/photo3.jpg" alt="Image 2" />
          <div className="carousel-text">
            <h3>Item Title 3</h3>
            <p>Description of the item.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
