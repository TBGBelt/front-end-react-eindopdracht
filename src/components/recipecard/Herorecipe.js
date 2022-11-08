import React from "react";
import Time from "../../assets/icons/time.svg";
import styles from './Herorecipe.module.css'
import {NavLink} from "react-router-dom"
import recipeImage from "../../assets/images/recipe1.jpg"

function Herorecipe ({recipeName, ingredients, calories, time, recipeID}) {


    return (
        <div className={styles["recipe-card__outer-container"]}>
            <div className={styles["recipe-card"]}>
                <NavLink to={`/recipe/:${recipeID}`} activeClassName={styles["recipe-link"]}>
                    <img src={recipeImage} alt="recipe-picture" className={styles["recipe-image"]}/>
                    <div className={styles["recipe-card__title"]}>
                        <h5>{recipeName}</h5>
                        <p className={styles["recipe-card__ingredients-calories"]}>{ingredients} ingredients
                            | {calories} calories</p>
                        <p className={styles["recipe-card__time"]}>{time} min <img src={Time} alt="clock"/></p>
                    </div>
                </NavLink>
            </div>

        </div>
    );
}

export default Herorecipe;
