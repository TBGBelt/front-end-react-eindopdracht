import React from "react";
import styles from "./Inputfield.module.css"

function Inputfield ({type, name, value, onChange, placeholder}) {

    return (
        <input className={styles.inputfield}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    );

}

export default Inputfield;