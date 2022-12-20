import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import logo from "./logo.png"
const Nav = () => {

    const[isLogin, setIsLogin] = useState(false);

    return <div>
        <Link to="/" className={style.title}>
            <img src={logo} alt="로고" className={style.logo}/>
        </Link>
        
        <ul className={style.container}>
            <li className={style.list}>
                <Link to="/product" className={style.link}>
                    청소용품
                </Link>
            </li>
            <li className={style.list}>
                <Link to="/comment" className={style.link}>
                    비포애프터
                </Link>
            </li>
            <li className={style.list}>
                <Link to="/free" className={style.link}>
                    무료견적
                </Link>
            </li>
        </ul>
    </div> 
}

export default Nav;