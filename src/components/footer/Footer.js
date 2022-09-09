import React from "react";
import {NavLink} from "react-router-dom";


// Header component

function Footer ({footerTitle, footerText}) {
    return (
        <div className="footer__outer-container">
            <div className="footer__inner-container">
                <section className="footer__card">
                    <h4>{footerTitle}</h4>
                    <ul className="footer-card__list">
                        <li>
                            <NavLink to="/" exact activeClassName="footer-list">{footerText}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName="footer-list">{footerText}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" exact activeClassName="footer-list">{footerText}</NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Footer;