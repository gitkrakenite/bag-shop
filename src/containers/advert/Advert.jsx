import React from "react";
import "./advert.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { AiFillCar, AiOutlineWallet } from "react-icons/ai";
import { BsHeadphones } from "react-icons/bs";
import { SiJsonwebtokens } from "react-icons/si";

const Advert = () => {
  return (
    <div id="hero" className="advertContainer">
      <div className="advertWrapper">
        <div className="add__text">
          <h4>Introduce</h4>
          <h2>Comfort And Functionality Guaranteed Your Adventure</h2>
          <br />
          <h2 style={{ marginBottom: "20px" }}>Buddy</h2>

          <span>
            Shop Now
            <RiArrowRightUpLine />
          </span>
        </div>

        <div className="add__sep"></div>

        <div className="advert__image">
          <div className="maainImage">
            <img
              src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Sec */}
      <div className="advertWrapper">
        <div className="advert__image">
          <div className="maainImage">
            <img
              src="https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </div>

        <div className="add__sep"></div>

        <div className="add__text1">
          <h4>Introduce</h4>
          <h2>
            Durability And Huge Storage Space, Backpacks For All Preference
          </h2>
          <br />

          <span>
            Shop Now
            <RiArrowRightUpLine />
          </span>
        </div>
      </div>

      {/* Last section */}
      <section className="advertFooter">
        <div className="advertFooter__first">
          <h1>The best bag in the town</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi
            voluptatem neque, voluptatum magnam nulla iusto consequatur tempora
            adipisci dolores ad dolorum cumque explicabo qui quam praesentium
            excepturi incidunt unde veritatis sit nihil ipsa! Quasi fugit quis
            cumque. Deleniti, modi?
          </p>

          <div className="first__layer">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <AiFillCar style={{ fontSize: "35px", color: "purple" }} />
              <span>Fast Delivery</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <BsHeadphones style={{ fontSize: "35px", color: "purple" }} />
              <span>Amazing Support</span>
            </div>
          </div>

          <div className="first__layer" style={{ marginTop: "2em" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <SiJsonwebtokens style={{ fontSize: "35px", color: "purple" }} />
              <span>High Quality</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <AiOutlineWallet style={{ fontSize: "35px", color: "purple" }} />
              <span>Amazing Vouchers</span>
            </div>
          </div>
        </div>

        <div className="add__sep"></div>

        <div className="advertFooter__Sec">
          <img
            src="https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Advert;
