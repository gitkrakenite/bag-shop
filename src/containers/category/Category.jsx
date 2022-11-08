import React from "react";
import "./category.css";
import { RiArrowRightUpLine } from "react-icons/ri";
const Category = () => {
  return (
    <div id="category" className="categoryWrapper">
      <div className="category__first">
        <div className="categoryFirstImg">
          <img
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div className="categoryFirstText">
          <h4>Accessories</h4>
          <h3>Travel Bag</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nobis?
          </p>
          <span>
            Shop Now
            <RiArrowRightUpLine />
          </span>
        </div>
      </div>
      {/*  */}

      <div className="category__sec">
        <div className="categorySecImg">
          <img
            src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div className="categorySecText">
          <h4>Accessories</h4>
          <h3>Travel Bag</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            nobis?
          </p>
          <span>
            Shop Now
            <RiArrowRightUpLine />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
