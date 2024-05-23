import React, { useEffect, useState, useRef } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";

import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LoginIcon from '@mui/icons-material/Login';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Nav from './nav/nav';
// import { useContext } from 'react';
// import React, { useRef } from 'react';


const Header = () => {

  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const headerRef = useRef();
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [Categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and juice",
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          // console.log(res.data.data)
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            console.log(item.country);
          });
          //console.log(res.data.data[0].country)
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if(position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    })
  }, [])

  return (
    <> 
     <div className="headerWrapper" ref={headerRef}>
        <header >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>

            {/* headerSearch start here  */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select
                  data={Categories}
                  placeholder={"All Categories"}
                  icon={false}
                />

                <div className="search">
                  <input type="text" placeholder="search for item..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>

            {/* location dropDown */}
            <div className="col-sm-5 d-flex align-item-center">
              <div className="ml-auto d-flex align-item-center">
                <div className="countryWrapper">
                  <Select
                    data={countryList}
                    placeholder={"Your Location"}
                    icon={<LocationOnIcon className="locationIcon" />}onClick={()=>setisOpenDropDown(!isOpenDropDown)}
                  />
                </div>


                <ClickAwayListener onClickAway={()=>setisOpenDropDown(false)}>
                <ul className="list list-inline mb-0 headerTabs">
                  <li className="list-inline-item">
                    <span className="cartName">
                       <img src={IconCompare}/>
                       <span className="badge bg-success rounded-circle">3</span>
                        Compare
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="cartName">
                       <img src={IconHeart}/>
                       <span className="badge bg-success rounded-circle ">3</span>
                        Wishlist
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="cartName">
                       <img src={IconCart}/>
                       <span className="badge bg-success rounded-circle">3</span>
                        Cart
                    </span>
                  </li>
                  <li className="list-inline-item" >
                  
                    <span className="cartName" >
                       <img src={IconUser}/>
                        Account
                    </span>
                        {
                            isOpenDropDown!==false && 
                            <ul className="dropdownMenu">
                            <li><Button><PersonOutlineOutlinedIcon/>My Account</Button></li>
                            <li><Button><LocationOnOutlinedIcon/>Order Tracking</Button></li>
                            <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                            <li><Button><SettingsOutlinedIcon/>Setting</Button></li>
                            <li><Button><LoginIcon/>Sign Out</Button></li>
                          </ul>
                          
                        }
                  
                  </li>
                </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
       </header>
      <Nav/>
     </div> 

     <div className="afterHeader">
      
     </div>
    </>
  );
};

export default Header;
