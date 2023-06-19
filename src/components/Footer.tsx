export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-top-left">
              <div className="footer-img">
                <img src="/images/uplift-footer.png" alt="" />
              </div>
              <div className="footer-form">
                <h4>Subscribe to get a FREE Counselling Session</h4>
                <div className="form-group">
                  <input type="email" placeholder="Type your email...." />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>

            <div className="footer-top-right">
              <div className="footer-element-title">Links</div>
              <div className="footer-element-title">Info</div>
              <div className="footer-element-title">Pages</div>
              <div className="footer-element">Blog</div>
              <div className="footer-element">About</div>
              <div className="footer-element">Contact</div>
              <div className="footer-element">Blog</div>
              <div className="footer-element">About</div>
              <div className="footer-element">Contact</div>
              <div className="footer-element">Blog</div>
              <div className="footer-element">About</div>
              <div className="footer-element">Contact</div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <img src="/images/facebook.svg" alt="" />
              <img src="/images/twitter.svg" alt="" />
              <img src="/images/insta.svg" alt="" />
              <img src="/images/linkedin.svg" alt="" />
            </div>
            <div className="footer-bottom-right">
                <h5>© 2023 Enark. All Rights Reserved.</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
