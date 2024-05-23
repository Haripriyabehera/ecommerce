import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import Product from "../../components/product";



const DetailsPage = () => {
  const [zoomImage, setZoomImage] = useState(
    "https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState([0]);

  const [inputValue, setInputValue] = useState(1);

  const [activeTabs, setActiveTabs] = useState(0);

  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var related = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  }

  const isActive = (index) => {
    setActiveSize(index);
  }

  const plus = () => {
    setInputValue(inputValue + 1);
  }

  const minus = () => {
    if (inputValue !== 0) {
      setInputValue(inputValue - 1);
    }
  }

  return (
    <section className="detailsPage">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Vegetables & Tubers</Link>
            </li>
            <li>Seeds of Change Organic</li>
          </ul>
        </div>

        <div className="container detailsContainer pt-3 pb-3">
        <div className="row">
              {/* product code start here */}
              <div className="col-md-5">
                <div className="productZoom">
                <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}> 
                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>

                    <div className="item">
                    <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}/>
                    </div>
                    
                  </Slider>
                </div>



                <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(0)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(1)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(2)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(3)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(4)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(5)
                      }
                    />
                  </div>

                  <div className="item">
                    <img
                      src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smlImageSize[0]},${smlImageSize[1]})`}
                      className="w-100"
                      onClick={() =>
                        goto(6)
                      }
                    />
                  </div>
                </Slider>
              </div>

              {/* productInfo code start here */}
              <div className="col-md-7 productInfo">
                <h1>Seeds of Change Organic Quinoa, Brown</h1>
                <div className="d-flex align-items-center mb-4 mt-4">
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-light ml-2">(32 reviews)</span>
                </div>

                <div className="priceSec d-flex align-items-center mb-2">
                  <span className="text-g priceLarge">$38</span>
                  <div className="ml-2 d-flex flex-column">
                    <span className="text-org">26% off</span>
                    <span className="text-light">$52</span>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam rem officia, corrupti reiciendis minima nisi modi,
                  quasi, odio minus dolore impedit fuga eum eligendi.
                </p>

                <div className="productSize d-flex align-items-center">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 0 ? "active" : ""}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 1 ? "active" : ""}`}
                        onClick={() => isActive(1)}
                      >
                        60g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 2 ? "active" : ""}`}
                        onClick={() => isActive(2)}
                      >
                        80g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 3 ? "active" : ""}`}
                        onClick={() => isActive(3)}
                      >
                        100g
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className={`tag ${activeSize === 4 ? "active" : ""}`}
                        onClick={() => isActive(4)}
                      >
                        150g
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                  <div className="counterSec ml-4">
                    <input type="number" value={inputValue} />
                    <span className="arrow plus" onClick={plus}>
                      <KeyboardArrowUpIcon />
                    </span>
                    <span className="arrow minus" onClick={minus}>
                      <KeyboardArrowDownIcon />
                    </span>
                  </div>

                  <Button className="btn-g btn-lg addtocartbtn">
                    <ShoppingCartOutlinedIcon />
                    Add to Cart
                  </Button>
                  <Button className="btn-lg addtocartbtn btn-border">
                    <FavoriteBorderOutlinedIcon />
                  </Button>
                  <Button className="btn-lg addtocartbtn btn-border">
                    <CompareArrowsOutlinedIcon />
                  </Button>
                </div>
              </div>
            </div>


            <div className="card mt-5 p-5 detailsPageTabs">
              <div className="customTabs">
                <ul className="inline list-inline">
                  <li className="list-inline-item">
                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={()=>setActiveTabs(0)}>Description</Button>
                  </li>
                  <li className="list-inline-item">
                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={()=>setActiveTabs(1)}>Additional info</Button>
                  </li>
                  <li className="list-inline-item">
                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={()=>setActiveTabs(2)}>Reviews (3)</Button>
                  </li>
                </ul>

                <br/>


                {
                  activeTabs===0 && 

                  <div className="tabContent">
                  <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                  <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>

                  <br/>
                  <h2>Packing & Delivery</h2>
                  <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                  <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>

                  <br/>

                  <h2>Suggest Us</h2>
                  <p>Refrigeration not necessary.</p>
                  <p>Stir before serving</p>

                  <br/>

                  <h2>Other Ingredients</h2>
                  <p>Organic raw pecans, organic raw cashews.</p>
                  <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
                  <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>

                  <br/>
                  <h2>Warnings</h2>
                  <p>Oil separation occurs naturally. May contain pieces of shell.</p>




                </div>
                }


                {
                  activeTabs===1 && 
                  <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                                                <tr class="stand-up">
                                                 <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr class="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                    </table>
                  </div>
                </div>
                }


                {
                  activeTabs===2 &&
                  <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br/>

                      <div className="card p-3 reviewCard flex-row">
                           <div className="image">
                           <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"/>
                           </div>
                           <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                           </div>


                           <div className="info pl-5">
                                <div className="d-flex align-items-center">
                                    <h5 className="text-light">December 4, 2022 at 3:12 pm</h5>
                                  <div className="rating">
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                  </div>
                                </div> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                           </div>


                      </div>

                      <div className="card p-4 reviewCard flex-row">
                           <div className="image">
                           <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"/>
                           </div>
                           <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                           </div>


                           <div className="info pl-5">
                                <div className="d-flex align-items-center">
                                    <h5 className="text-light">December 4, 2022 at 3:12 pm</h5>
                                  <div className="rating">
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                  </div>
                                </div> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                           </div>


                      </div>

                      <div className="card p-4 reviewCard flex-row">
                           <div className="image">
                           <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"/>
                           </div>
                           <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                           </div>


                           <div className="info pl-5">
                                <div className="d-flex align-items-center">
                                    <h5 className="text-light">December 4, 2022 at 3:12 pm</h5>
                                  <div className="rating">
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                  </div>
                                </div> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                           </div>


                      </div>

                      <div className="card p-4 reviewCard flex-row">
                           <div className="image">
                           <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"/>
                           </div>
                           <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                           </div>


                           <div className="info pl-5">
                                <div className="d-flex align-items-center">
                                    <h5 className="text-light">December 4, 2022 at 3:12 pm</h5>
                                  <div className="rating">
                                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                  </div>
                                </div> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? Reply</p>
                           </div>


                      </div>


                      <br/>
                      <br/>


                      <form className="reviewForm">
                        <h4>Add a review</h4> <br/>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Write a Review"></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                              <input type="text" className="form-control" placeholder="Website"/>
                        </div>

                        <br/>

                        <div className="form-group">
                            <Button className="btn-g btn-lg">Submit Review</Button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-4 pl-5 part2">
                      <h4>Customer review</h4>
                      
                      <div className="d-flex align-items-center mt-2">
                      <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                      <strong className="ml-3">4.8 out of 5</strong>

                      
                      </div>

                      <br/>
                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">5 star</span>
                        <div class="progress" style={{width:'75%', height:'15px'}}>
                            <div class="progress-bar bg-success" style={{width:'75%', height:'15px'}}>75%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">4 star</span>
                        <div class="progress" style={{width:'75%', height:'15px'}}>
                            <div class="progress-bar bg-success" style={{width:'50%', height:'15px'}}>50%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">3 star</span>
                        <div class="progress" style={{width:'75%', height:'15px'}}>
                            <div class="progress-bar bg-success" style={{width:'55%', height:'15px'}}>55%</div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">2 star</span>
                        <div class="progress" style={{width:'75%', height:'15px'}}>
                            <div class="progress-bar bg-success" style={{width:'35%', height:'15px'}}>35%</div>
                        </div>
                      </div>
                      

                      <div className="progressBarBox d-flex align-items-center">
                        <span className="mr-3">1 star</span>
                        <div class="progress" style={{width:'75%', height:'15px'}}>
                            <div class="progress-bar bg-success" style={{width:'25%', height:'15px'}}>25%</div>
                        </div>
                      </div>
                      <div>
                        

                      </div>
                    </div>
                  </div>
                </div>
                }



              </div>
            </div>


            <div className="relatedProducts pt-5 pb-4">
              <h2 className="hd mb-0 mt-0">Related product</h2>
              <br/>
            <Slider {...related} className="prodSlider">
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
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
              </Slider>
            </div>
        </div>

        
      </div>
    </section>
  );
};

export default DetailsPage;
