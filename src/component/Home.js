import React from "react";
import home_bnr from "../images/home_bnr.jpg"
import { HomeAbout } from "./HomeAbout";

export const Home = () => {
    return (
        <>
        <div className="bnrImg">
        <img src={home_bnr} width="100%" height="700px"/>
        </div>

        <div className=" py-5 mt-5">
         <HomeAbout />
        </div>
        </>
    )

}