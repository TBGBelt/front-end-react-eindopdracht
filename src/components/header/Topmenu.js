import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Topmenu.module.css'

// Topmenu component

function Topmenu ({title, text1, text2, text3}) {
    return (
        <div className={styles["topmenu__outer-container"]}>
            <div className={styles["topmenu__inner-container"]}>
                <h3>
                    <NavLink to="/" exact activeClassName={styles["homepage-logo"]}>{title}</NavLink>
                </h3>
                <ul className={styles["navigation-list"]}>
                    <li>
                        <NavLink to="/" exact activeClassName={styles["topmenu-navigation"]}>{text1}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={styles["topmenu-navigation"]}>{text2}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" exact activeClassName={styles["topmenu-navigation"]}>{text3}</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Topmenu;