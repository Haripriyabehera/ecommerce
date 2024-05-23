import React from "react";
import './style.css';
import NotFoundImg from '../../assets/images/page-404.png';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <section className="notFound">
            <div className="container-fluid">
                <div className="box">
                    <img src={NotFoundImg} />
                    <br/>
                    <h1>Page not Found</h1>
                    <p>The link click may be broken the page may have been removed visit Homepage or Contact us about the problem</p>
                    <br/>

                    <div className="d-flex">
                       <Button className="btn-g btn-lg m-auto"> <Link to='/' >Back to Home Page</Link></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;