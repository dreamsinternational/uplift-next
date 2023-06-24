"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
    ],
  };
  return (
    <>
      <div className="testimonial-container">
        <div className="testimonial-top">
          <h3>Don&apos;t just take our word for it</h3>
          <p>
            Hear from some of our amazing customers who are loving our courses.
          </p>
        </div>

        <Slider {...settings}>
          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="rating">
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
              <img src="/images/star.svg" alt="" />
            </div>

            <p>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt voluptate nulla repellat voluptatum explicabo totam.&quot;
            </p>

            <div className="user">
              <div className="user-image">
                <img src="/images/user.svg" alt="" />
              </div>
              <div className="user-info">
                <div className="name">John Smith</div>
                <div className="profession">Product Manager, Sisyphus</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
