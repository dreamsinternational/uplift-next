'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {

  var settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false }
      }
    ]

  };
  return (<>
    <div className="carousel-complete">
      <div className="carousel-top">
        <div className="carousel-top-info">
          <h3>Popular Courses</h3>
          <p>Try out our most popular courses and see why people love them</p>
        </div>
        <button>View All Courses</button>
      </div>
      <Slider {...settings} className="carousel-container">
        <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/cognitive-dev.png" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title">Child Development</div>
            <div className="price">FREE</div>
          </div>
          <div className="course-title"><h3>Cognitive Development</h3></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div>
        <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/socio-emo-dev.png" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title">Emotional Intelligence</div>
            <div className="price">₹ 499</div>
          </div>
          <div className="course-title"><h3>Socio – emotional Development</h3></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div>
        <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/teaching-aids.png" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title">Curriculum Planning</div>
            <div className="price">₹ 499</div>
          </div>
          <div className="course-title"><h3>Teaching Aids</h3></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div>
        <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/components-of-social-dev.png" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title">Child Development</div>
            <div className="price">₹ 499</div>
          </div>
          <div className="course-title"><h3>Components of Social Development (part-1)</h3></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div>
        <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/mathematical-op-div.png" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title">Maths in early years</div>
            <div className="price">₹ 499</div>
          </div>
          <div className="course-title"><h3>Mathematical Operations (Division)</h3></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div>
        {/* <div className="carousel-card">
          <div className="image-container">
            <img src="/images/course-thumbnail/" alt="" />
          </div>
          <div className="course-group">
            <div className="group-title"></div>
            <div className="price"></div>
          </div>
          <div className="course-title"></div>
          <div className="course-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum deserunt impedit voluptas quo distinctio soluta! Ut molestiae illum possimus tenetur provident itaque nesciunt delectus?</div>
          <button>View More</button>
        </div> */}
      </Slider>
    </div></>
  );
}