import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const LandingPage = () => (
  <div>
    <h1>Landing</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed
      in.
    </p>
    <div className="row">
      <li className="col-xs-12 col-lg-12 prow">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/800/600"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/ff9900"
                  />
                </h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 titleDiv">
            Meow Meow Meow Meow Meow Meow Meow
            <p>
              Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow
              Meow Meow
            </p>
          </div>
        </div>
      </li>
      <li className="col-xs-12 col-lg-12 prow">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/800/600"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/ff9900"
                  />
                </h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 titleDiv">title</div>
        </div>
      </li>
      <li className="col-xs-12 col-lg-12 prow">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <div class="container testimonial-group">
              <div class="row text-center flex-nowrap">
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://via.placeholder.com/800x600/006600"
                  />
                </div>
                <div class="thum col-xs-5">
                  <img
                    className="img-responsive"
                    src="http://placekitten.com/g/600/500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
);

export default LandingPage;
