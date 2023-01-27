import React from "react";
import style from "./home.module.css"
import homeBanner from '../../assets/images/banner.jpg';
const Home = () => {
    return <div className={style.container}>
        <img src={homeBanner} alt="" className={style.homeBanner}/>
    </div> 
}


export default Home;