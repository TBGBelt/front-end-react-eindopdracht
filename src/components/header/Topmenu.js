import React from "react";
import {NavLink} from "react-router-dom";

// Topmenu component

function Topmenu ({title, text1, text2, text3}) {
    return (
        <div className="topmenu__outer-container">
            <div className="topmenu__inner-container">
                <h3>
                    <NavLink to="/" exact activeClassName="homepage-logo">{title}</NavLink>
                </h3>
                <ul className="navigation-list">
                    <li>
                        <NavLink to="/" exact activeClassName="topmenu-navigation">{text1}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName="topmenu-navigation">{text2}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" exact activeClassName="topmenu-navigation">{text3}</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Topmenu;