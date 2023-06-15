"use client";

export function Features() {
  return (
    <>
      <div className="feature-section">
        <div className="container">
          <div className="left">
            <h3>Why Us?</h3>
            <h2>One of a kind Experience</h2>
            <div className="buttons-group">
              <button className="get-started">Get Started</button>

              <button className="Learn-more">Learn More</button>
            </div>
          </div>

          <div className="right">
                <div className="svg-container">
                    <svg height="600" width="500">
                      <line
                        x1="10"
                        y1="0"
                        x2="10"
                        y2="500"
                      />
                      Sorry, your browser does not support inline SVG.
                    </svg>
                </div>

            <div className="feature1 feature">
                <div className="backdrop"><img src="/images/training.svg" alt="" /></div>
                <div className="info">
                    <h3>Comprehensive Training Programs</h3>
                    <p>We offer a wide range of training programs that cater to the diverse needs of educators across various disciplines and grade levels.</p>
                </div>
            </div>
            <div className="feature2 feature">
                <div className="backdrop"><img src="/images/certificate.svg" alt="" /></div>
                <div className="info">
                    <h3>Recognized Certifications</h3>
                    <p>Upon successfully completing our training programs, you'll receive a certificate of completion, validating your professional development achievements.</p>
                </div>
            </div>
            <div className="feature3 feature">
                <div className="backdrop"><img src="/images/learning.svg" alt="" /></div>
                <div className="info">
                    <h3>Engaging and Interactive Learning</h3>
                    <p>Our training programs are designed to be engaging, incorporating a variety of instructional strategies, multimedia resources, and collaborative activities.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
