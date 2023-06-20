'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {

  const hotelCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]


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