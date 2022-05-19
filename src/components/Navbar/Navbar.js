import React, { useState } from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
// import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {

    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
        return(
            <li key={index}>
                <NavLink to={url} activeclassname="active">
                    {title}
                </NavLink>
            </li>
        )
    });
    
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <nav>
            <div className="logo">
                Fantastic<font>Films</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                {/* <i className="fas fa-times">X</i>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
        </nav>

    )
};

export default Navbar;