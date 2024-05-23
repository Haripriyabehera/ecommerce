import React from "react";
import SliderBanner from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners/";

import "./style.css";
import Product from "../../components/product";
import Banner4 from "../../assets/images/banner4.jpg";

import Slider from "react-slick";
import TopProducts from "./TopProducts/index";

// import NewSletterImg from "../../assets/images/newSletterImg.png";
// import NewSletter from "../../components/newsletter";



const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <>
      <SliderBanner />
      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Product</h2>
            <ul className="list list-inline ml-auto mb-0 filterTab">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Milks & Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Coffes & Teas</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Pet Foods</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Meats</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Vegetables</a>
              </li>
            </ul>
          </div>

          <div className="productRow">
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>

      <section className="homeProducts homeProductRow2 pt-0">
        <div className="container-fluid ">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto mb-0 filterTab">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New Added</a>
              </li>
            </ul>
          </div>

          <br />
          <br />

          <div className="row">
            <div className="col-md-3 pr-5">
              <img src={Banner4} className="w-100" />
            </div>

            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="hot" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />
            </div>

            <div className="col">
              <TopProducts title="Trending Products" />
            </div>

            <div className="col">
              <TopProducts title="Recently added" />
            </div>

            <div className="col">
              <TopProducts title="Top Rated" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br />
                needs from our shop
              </h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br />
              <NewSletter />
            </div>
            <div className="img">
              <img src={NewSletterImg} className="w-100" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer Part start here */}

     
    </>
  );
};

export default Home;
