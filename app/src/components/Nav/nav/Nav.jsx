import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"
const Nav = () => {
    return <div>
        <h1>그린청소</h1>
        <ul>
            <li>
                <Link to="/clean">
                    입주청소
                </Link>
            </li>
        </ul>
    </div> 
}

export default Nav;