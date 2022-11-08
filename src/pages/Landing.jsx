import React from "react";
import Advert from "../containers/advert/Advert";
import Category from "../containers/category/Category";
import Footer from "../containers/footer/Footer";
import Header from "../containers/header/Header";
import Hero from "../containers/hero/Hero";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Advert />
      <Category />
      <Footer />
    </div>
  );
};

export default Landing;
