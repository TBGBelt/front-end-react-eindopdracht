import React from "react";

function Singleselect({value, onChange, children}) {
    return (
        <select className="single-select"
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
}

export default Singleselect;