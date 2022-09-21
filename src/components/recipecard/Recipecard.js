import React, {useState} from "react";
// import { ReactComponent as Time } from ".src/assets/icons/time.svg";
import './Recipecard.css'

function Recipecard ({picture, recipeName, ingredients, calories, time}) {


    return (
        <div className="recipe-card__outer-container">
            <div className="recipe-card">
                <img src={picture}/>
                <h3 className="recipe-card__title">{recipeName}</h3>
                <p>{ingredients} ingredients | {calories} calories</p>
                <p>{time} min </p>
            </div>
        </div>
    );
}

export default Recipecard;
