import React from "react";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import banner3 from '../../assets/images/banner3.jpg'


function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = () =>{

        const [value, setValue] = React.useState([20, 37]);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
        
    return (
      <>  
        <div className="sidebar">
            <div className="card border-0 shadow">
                <h3>Category</h3>

                <div className="catList">
                    <div className="catItem d-flex align-items-center">
                        <span className="img"><img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30}/></span>
                        <h4 className='mb-0'>Milks & Dairies</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle">30</span>
                    </div>
                    
                    <div className="catItem d-flex align-items-center">
                        <span className="img"><img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30}/></span>
                        <h4 className='mb-0'>Milks & Dairies</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle">30</span>
                    </div>

                    <div className="catItem d-flex align-items-center">
                        <span className="img"><img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30}/></span>
                        <h4 className='mb-0'>Milks & Dairies</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle">30</span>
                    </div>

                    <div className="catItem d-flex align-items-center">
                        <span className="img"><img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30}/></span>
                        <h4 className='mb-0'>Milks & Dairies</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle">30</span>
                    </div>

                    <div className="catItem d-flex align-items-center">
                        <span className="img"><img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" width={30}/></span>
                        <h4 className='mb-0'>Milks & Dairies</h4>
                        <span className="d-flex align-items-center justify-content-center rounded-circle">30</span>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow">
                <h3>Filter By Price</h3>
                <Slider
                        min={0}
                        step={1}
                        max={1000}
                         getAriaLabel={() => 'Temperature range'}
                         value={value}
                         onChange={handleChange}
                         valueLabelDisplay="auto"
                         getAriaValueText={valuetext}
                         color="success"
                />



                <div className="d-flex pt-2 pb-2 priceRange">
                    <span>From: <strong className="text-success">${value[0]}</strong></span>
                    <span>From: <strong className="text-success">${value[1]}</strong></span>
                </div>


                <div className="filters">
                    <h5>Color</h5>
                    <ul className="mb-0">
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Green {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Green {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                    </ul>
                </div>

                <div className="filters">
                    <h5>Item Condition</h5>
                    <ul className="mb-0">
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Green {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Green {56}</li>
                        <li><Checkbox {...label} color="success"/>Blue {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                        <li><Checkbox {...label} color="success"/>Red {56}</li>
                    </ul>
                </div>

                <div className="d-flex">
                    <Button className='btn btn-g'><FilterAltOutlinedIcon/>Filter</Button>
                </div>

            </div>

            <br/>
            <img src={banner3} className="w-100" />
        </div>
      </> 
    )
}

export default Sidebar;