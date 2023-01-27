import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
import logo from "./logo.png"
const Nav = () => {

    const[isLogin, setIsLogin] = useState(false);

    return <div className={style.container}>
        <div className={style.loginContainer}>
            <span>
                <Link to="/" className={style.title}>
                    <img src={logo} alt="로고" className={style.logo}/>
                </Link>
            </span>

            <span className={style.login}>
                <span className={style.login}><Link to="/login">로그인</Link></span>
                <span className={style.enroll}><Link to="/enroll">회원가입</Link></span>
            </span>
        </div>
        
        <ul className={style.navContainer}>
            <li className={style.list}>
                <Link to="/product" className={style.link}>
                    청소용품
                </Link>
            </li>
            <li className={style.list}>
                <Link to="/comment" className={style.link}>
                    고객들의 소리
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