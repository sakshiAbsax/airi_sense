import React from "react";
import home_side1 from "../images/home_side2.png"
import { Link } from "react-router-dom";

export const HomeAbout =()=>{
    return(
        <>
       <div className="container">
        <div className="d-flex">
            <div className="col-lg-7 col-sm-12 col-md-12" >
                <div className="mt-5 pt-5 whatWeDo">
                <h2> About </h2>
                  <p className="mt-4">Airi sense delivers data-driven & robotic solutions for your logistics automation alongside reliable, modular service concepts. divlaborating with forward-thinking companies, we are committed to setting new standards in warehouse automation to provide future-proof products and solutions. As part of the KUKA Group, our customers trust the competence of our passionate employees – more than 14,000 people working across the globe.</p>
                 <Link to="/about"> <div className="btn btn-lg btn-borderd button-1 my-3">What We Do</div> </Link>
                </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-12">
                <div className="ps-5">
             <img src={home_side1} width="auto" height="500px"/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}