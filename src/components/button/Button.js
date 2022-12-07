import React from "react";
import styles from "./Button.module.css"

function Button ({buttonText}) {
    return (
        <button className={styles.button} type="submit">
            {buttonText}
        </button>
    );
}

export default Button;