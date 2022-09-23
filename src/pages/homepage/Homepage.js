import background from '../../assets/images/hero-image.jpg';
import React from "react";
// import styles './Homepage.module.css';



//homepage overview

function Homepage() {

    return (
        <main>
            <img src={background} alt="hero-image"/>
        <h1>delicious recipes</h1>
            <p>Updated Daily</p>
        </main>
    )
};


export default Homepage