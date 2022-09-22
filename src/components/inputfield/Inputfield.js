import React from "react";

function Inputfield ({type, name, value, onChange, placeholder}) {

    return (
        <input className="inputfield"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        />
    );

}

export default Inputfield;