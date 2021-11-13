import React from "react";
// import logo from "../../images/logono.svg";
import './Footer.css'

const Footer = () => {
  return (
    <div className=" footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              <img alt="" />
              <div className="second-part">
                <h5 className="mt-5">Subscribe</h5>
                <input
                  className="input-field mt-3"
                  type="email"
                  placeholder="Email Address"
                />
                <br />
                <p>
                  <span className="m-2 "><i class="fab fa-google"></i></span>
                  <span className="m-2 "><i class="fab fa-facebook-square"></i></span>
                  <span className="m-2 "><i class="fab fa-youtube"></i></span>

                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h4 className="">Pages</h4>
            <p>Services</p>
            <p>Offeres</p>
            <p>ExoticPlaces</p>
            <p>Login</p>
            <p>Contact Us</p>
          </div>

          <div className="col-md-3">
            <div className="third-part">
              <h4>Travel The World</h4>
              <p className="mt-4">California</p>
              <p>SwitZerland</p>
              <p>Canada</p>
              <p>Nepal</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h4>Contact Us</h4>
              <small className="mt-5">Office:685 Lane Drive St. California, 33020 </small>
              <br />
              <small className="mt-3">Phone:+010 234 7892 34</small>
              <br />
              <small className="mt-3">Fax: +070 435 5798982</small>
              <br />
              <small className="mt-3">Mail: info@travely.com.</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2021 travily  By Munna Mahmud. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;