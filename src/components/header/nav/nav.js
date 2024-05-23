import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

import Button from '@mui/material/Button';

const Nav = () => {
  return (
    <div className='nav d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row position-relative'>
                <div className='col-sm-3 part1 d-flex align-items-center'>
                    <Button className='bg-success text-white catTab'><GridViewIcon/>&nbsp;Browser All Categories <KeyboardArrowDownIcon/> </Button>
                </div>
                <div className='col-sm-7 part2 position-static'>
                    <nav>
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'>
                                <Button><Link>Home</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>About</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Shop</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>vendor</Link></Button>
                            </li>
                            <li className='list-inline-item position-static'>
                                <Button><Link>Mega menu<KeyboardArrowDownIcon/></Link></Button>
                                <div className='dropdown_menu megaMenu w-100'>
                                    <div className='row'>
                                        <div className='col'>
                                            <h4 className='text-g'>Fruits & Vegetables</h4>
                                              
                                                <li><Link to="">Meat & Poultry</Link></li>
                                                <li><Link to="">Fresh Vegetables</Link></li>
                                                <li><Link to="">Herbs & Seasonings</Link></li>
                                                <li><Link to="">Cuts & Sprouts</Link></li>
                                                <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                <li><Link to="">Packaged Produce</Link></li>
                                            
                                        </div>
                                        <div className='col'>
                                            <h4 className='text-g'>Fruits & Vegetables</h4>
                                                <li><Link to="">Meat & Poultry</Link></li>
                                                <li><Link to="">Fresh Vegetables</Link></li>
                                                <li><Link to="">Herbs & Seasonings</Link></li>
                                                <li><Link to="">Cuts & Sprouts</Link></li>
                                                <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                <li><Link to="">Packaged Produce</Link></li>
                                        </div>
                                        <div className='col'>
                                            <h4 className='text-g'>Fruits & Vegetables</h4>
                                                <li><Link to="">Meat & Poultry</Link></li>
                                                <li><Link to="">Fresh Vegetables</Link></li>
                                                <li><Link to="">Herbs & Seasonings</Link></li>
                                                <li><Link to="">Cuts & Sprouts</Link></li>
                                                <li><Link to="">Exotic Fruits & Veggies</Link></li>
                                                <li><Link to="">Packaged Produce</Link></li>
                                        </div>
                                        <div className='col'>
                                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className='w-100'/>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Blog</Link></Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Pages<KeyboardArrowDownIcon/></Link></Button>
                                <div className='dropdown_menu'>
                                    
                                    
                                        <li><Button><Link to="/about">About Us</Link></Button></li>
                                        <li><Button><Link to="/about">Contact</Link></Button></li>
                                        <li><Button><Link to="/about">My Account</Link></Button></li>
                                        <li><Button><Link to="/about">Login</Link></Button></li>
                                        <li><Button><Link to="/about">Register</Link></Button></li>
                                        <li><Button><Link to="/about">Forget password</Link></Button></li>
                                        <li><Button><Link to="/about">Reset password</Link></Button></li>
                                        <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                        <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                        <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                                        <li><Button><Link to="/about">404 pages</Link></Button></li>
                                    
                                    
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Button><Link>Contact</Link></Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-sm-2 part3 d-flex align-items-center'>
                    <div className='phNo d-flex align-items-center ml-auto'>
                        <span><HeadphonesOutlinedIcon/></span>
                        <div className='info ml-3'>
                            <h3 className='text-g mb-0'>1900 - 888</h3>
                            <p className='mb-0'>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav;