import React from "react";
import "./footer.css";
import { GrFormNext } from "react-icons/gr";
import { SiVisa } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="contact" className="footerContainer">
      <div className="footerWrapper">
        <div className="footerItem">
          <h2>COMPANY INFO</h2>
          <ul>
            <li>About Us</li>
            <li>Latest Posts</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
        {/*  */}
        <div className="footerItem">
          <h2>HELP LINKS</h2>
          <ul>
            <li>Tracking</li>
            <li>Order Status</li>
            <li> Delivery</li>
            <li>Shopping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/*  */}
        <div className="footerItem">
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>Special Offers</li>
            <li>Gift Cards</li>
            <li> Advertising</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/*  */}
        <div className="footerItemLast">
          <h2>GET IN THE KNOW</h2>
          <div>
            <input type="text" placeholder="Enter Email" />
            <GrFormNext style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>

      {/* last */}

      <div className="footerWrapLastSect">
        <div className="footerLastFirst">
          <p> &copy; 2022 Farzan Shops </p>
          <span>Privacy Policy Terms & Conditions</span>
        </div>

        <div className="footerLastSec">
          <SiVisa className="footerLastICon" />
          <FaCcPaypal className="footerLastICon1" />

          <BsCurrencyBitcoin className="footerLastICon2" />

          <RiMastercardFill className="footerLastICon3" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
