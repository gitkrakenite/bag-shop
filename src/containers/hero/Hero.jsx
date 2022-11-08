import React from "react";
import "./hero.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div id="hero" className="heroWrapper">
      <div className="hero__text">
        <h4>SUMMER 2020</h4>
        <h2>-30% Discount</h2>
        <p>We know how large objects will act, but things on a small scale</p>
        <span>
          Shop Now
          <RiArrowRightUpLine />
        </span>
      </div>

      <div className="hero__sep"></div>

      <div className="hero__image">
        <div className="heroImageTestimony">
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              loading="lazy"
              alt=""
            />
          </div>

          <div>
            <p>
              <span>Eric</span> I love it
            </p>
            <h6>18/07/2022</h6>
          </div>
        </div>

        <div className="maainImage">
          <img
            src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
