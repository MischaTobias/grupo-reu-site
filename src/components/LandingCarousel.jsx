export const LandingCarousel = () => {
  return (
    <div className="owl-carousel-wrapper" style={{ height: "845px" }}>
      <div
        className="owl-carousel dots-inside dots-horizontal-center show-dots-hover show-dots-xs show-dots-sm show-dots-md nav-style-1 nav-inside nav-inside-plus nav-light nav-lg nav-font-size-lg show-nav-hover mb-0"
        data-plugin-options="{'responsive': {'0': {'items': 1, 'dots': true, 'nav': false}, '479': {'items': 1, 'dots': true}, '768': {'items': 1, 'dots': true}, '979': {'items': 1}, '1199': {'items': 1}}, 'loop': false, 'autoHeight': false, 'margin': 0, 'dots': false, 'dotsVerticalOffset': '-235px', 'nav': true, 'navVerticalOffset': '70px', 'animateIn': 'fadeIn', 'animateOut': 'fadeOut', 'mouseDrag': false, 'touchDrag': false, 'pullDrag': false, 'autoplay': true, 'autoplayTimeout': 7000, 'autoplayHoverPause': true, 'rewind': true}"
      >
        {/* <!-- Carousel Slide 1 --> */}
        <div
          className="position-relative overlay overlay-show overlay-op-9 overflow-hidden pt-4"
          data-dynamic-height="['845px','845px','845px','750px','750px']"
          style={{ height: "845px" }}
        >
          <div
            className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
            data-appear-animation="kenBurnsToLeft"
            data-appear-animation-duration="30s"
            data-plugin-options="{'minWindowWidth': 0}"
            data-carousel-onchange-show
            style={{
              backgroundImage: "url(../../assets/gruporeuteam.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container position-relative z-index-3 pb-5 h-100">
            <div className="row justify-content-center align-items-center pb-5 h-100">
              <div className="col-lg-8 text-center pb-5 mb-5">
                <h1
                  className="text-color-light font-weight-bold line-height-1 text-12 text-md-14 positive-ls-3 mb-3 appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1000"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  PORTO LAW FIRM
                </h1>
                <h2
                  className="alternative-font-4 text-color-light font-weight-semibold line-height-3 text-5 positive-ls-1 mb-2 appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1300"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  <span className="text-color-primary">Attorneys At Law</span>{" "}
                  <span className="opacity-9">Located In Los Angeles, Ca</span>
                </h2>
                <p
                  className="text-color-light opacity-6 text-3-5 mb-4"
                  data-plugin-animated-letters
                  data-plugin-options="{'startDelay': 2200, 'minWindowWidth': 0}"
                >
                  More Than 50 Years Combined Experience Serving Businesses
                </p>
                <a
                  href="demo-law-firm-2-contact.html"
                  className="btn btn-primary font-weight-bold text-3-5 px-5 py-3 mt-3 appear-animation"
                  data-appear-animation="fadeInUpShorterPlus"
                  data-appear-animation-delay="3300"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Carousel Slide 2 --> */}
        <div
          className="position-relative overlay overlay-show overlay-op-9 overflow-hidden pt-4"
          data-dynamic-height="['845px','845px','845px','750px','750px']"
          style={{ height: "845px" }}
        >
          <div
            className="background-image-wrapper position-absolute top-0 left-0 right-0 bottom-0"
            data-appear-animation="kenBurnsToLeft"
            data-appear-animation-duration="30s"
            data-plugin-options="{'minWindowWidth': 0}"
            data-carousel-onchange-show
            style={{
              backgroundImage: "url(img/demos/law-firm-2/slides/slide-2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container position-relative z-index-3 pb-5 h-100">
            <div className="row justify-content-center align-items-center pb-5 h-100">
              <div className="col-lg-8 text-center pb-5 mb-5">
                <h1
                  className="text-color-light font-weight-bold line-height-1 text-12 text-md-14 positive-ls-3 mb-3 appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1000"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  SOLID EXPERIENCE
                </h1>
                <h2
                  className="alternative-font-4 text-color-light font-weight-semibold line-height-3 text-5 positive-ls-1 mb-2 appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1300"
                  data-plugin-options="{'minWindowWidth': 0}"
                >
                  <span className="opacity-9">
                    Extensive Resources And Commitment To Client
                  </span>
                </h2>
                <p
                  className="text-color-light opacity-6 text-3-5 mb-4"
                  data-plugin-animated-letters
                  data-plugin-options="{'startDelay': 2200, 'minWindowWidth': 0}"
                >
                  More Than 50 Years Combined Experience Serving Businesses
                </p>
                <a
                  href="demo-law-firm-2-contact.html"
                  className="btn btn-primary font-weight-bold text-3-5 px-5 py-3 mt-3 appear-animation"
                  data-appear-animation="fadeInUpShorterPlus"
                  data-appear-animation-delay="3300"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
