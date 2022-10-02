import React from "react";
import styles from "./Singleselect.module.css"

function Singleselect({value, onChange, children}) {
    return (
        <select className={styles["single-select"]}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
}

export default Singleselect;