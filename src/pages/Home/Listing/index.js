import React, {useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar";
import Product from '../../../components/product/index';
import { Button } from '@mui/material'; 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';


const Listing = () =>{

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const [isOpenDropDown2, setisOpenDropDown2] = useState(false);

    return(
       <section className="listingPage">
            <div className="container-fluid">
                    <div className="breadcrumb flex-column">
                        <h1>Snack</h1>
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Link to={''}>Home</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to={''}>Shop</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to={''}>Snack</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="listingData">
                        <div className="row">
                            <div className="col-md-3 sidebarWrapper">
                                <Sidebar/>
                            </div>

                            

                            <div className="col-md-9 rightContent homeProducts pt-0">

                                 <div className="topStrip d-flex align-items-center">
                                       <p className="mb-0">We found <span className="text-success">20</span> items for you!</p>
                                       <div className="btnContainer  d-flex align-items-center">
                                                <div className="tab_ position-relative">
                                                    <Button className="btn_" onClick={()=>setisOpenDropDown(!isOpenDropDown)}><GridViewOutlinedIcon/> Show: 50</Button>
                                                    {
                                                        isOpenDropDown!==false && 
                                                        <ul className="dropdownMenu">
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown(false)}>50</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown(false)}>100</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown(false)}>150</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown(false)}>200</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown(false)}>All</Button></li>
                                                    </ul>
                                                    }
                                                    
                                                </div>
                                                <div className="tab_ ml-3 position-relative">
                                                    <Button className="btn_" onClick={()=>setisOpenDropDown2(!isOpenDropDown2)}><FilterListOutlinedIcon/>Sort by: Featured</Button>
                                                    {
                                                        isOpenDropDown2!==false &&
                                                        <ul className="dropdownMenu">
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown2(false)}>Featured</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown2(false)}>Price: Low to High</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown2(false)}>Price: High to Low</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown2(false)}>Release Date</Button></li>
                                                         <li><Button className="align-items-center" onClick={() => setisOpenDropDown2(false)}>Avg Rating</Button></li>
                                                    </ul>
                                                    }
                                                </div>
                                       </div>
                                 </div>
                                <div className="productRow pl-4 pr-3">
                                    <div className="item">
                                        <Product tag="best"/>
                                    </div>
                                    <div className="item">
                                        <Product tag="sale"/>
                                    </div>
                                    <div className="item">
                                        <Product tag="hot"/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product tag="new"/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                    <div className="item">
                                        <Product/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
       </section>
    )
}

export default Listing;