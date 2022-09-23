import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Footer.module.css'
import Facebook from "../../assets/icons/facebook.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Twitter from "../../assets/icons/twitter.png";


// Header component

function Footer() {
    return (
        <div className={styles['outer-container']}>
        <div className={styles["footer__outer-container"]}>
            <div className={styles["footer__inner-container"]}>
                <section className={styles["footer__card"]}>
                    <h4 className={styles["footer__card-title"]}>information</h4>
                    <ul className={styles["footer-card__list"]}>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                    </ul>
                </section>
                <section className={styles["footer__card"]}>
                    <h4 className={styles["footer__card-title"]}>about</h4>
                    <ul className={styles["footer-card__list"]}>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                    </ul>
                </section>
                <section className={styles["footer__card"]}>
                    <h4 className={styles["footer__card-title"]}>contact</h4>
                    <ul className={styles["footer-card__list"]}>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}>lorem ipsum</NavLink>
                        </li>
                    </ul>
                </section>
                <section className={styles["footer__card"]}>
                    <h4 className={styles["footer__card-title"]}>social</h4>
                    <ul className={styles["footer-card__list"]}>
                        <li className={styles.icon}>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}><img  src={Facebook} alt="facebook"/></NavLink>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}><img  src={LinkedIn} alt="linkedin"/></NavLink>
                            <NavLink to="/" exact activeClassName={styles["footer-list"]}><img  src={Twitter} alt="twitter"/></NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        </div>
    );
}

export default Footer;