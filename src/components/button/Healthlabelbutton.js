import React from "react";
import styles from "./Healthlabelbutton.module.css"

function Healthlabelbutton ({buttonText}) {
    return (
        <button className={styles["health-label-item"]}>
            {buttonText}
        </button>
    );
}

export default Healthlabelbutton;