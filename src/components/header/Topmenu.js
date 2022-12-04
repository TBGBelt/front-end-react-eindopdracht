import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Topmenu.module.css'
import './fonts.css'
// Topmenu component

function Topmenu () {
    return (
        <>
            <div className={styles["topmenu__inner-container"]}>
                <h3>
                    <NavLink to="/"  activeClassName={styles["homepage-logo"]}>The Clueless Cook</NavLink>
                </h3>
                <ul className={styles["navigation-list"]}>
                    <li>
                        <NavLink to="/"  activeClassName={styles["topmenu-navigation"]}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" activeClassName={styles["topmenu-navigation"]}>Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inloggen" activeClassName={styles["topmenu-navigation"]}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Topmenu;