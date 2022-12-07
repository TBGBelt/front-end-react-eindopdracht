import React from "react";
import Time from "../../assets/icons/time.svg";
import styles from './Recipecard.module.css'
import {NavLink} from "react-router-dom"

function Recipecard({picture, recipeName, ingredients, calories, time, recipeID}) {


    return (

            <div className={styles["recipe-card"]}>
                <NavLink to={`/recipe/${recipeID}`} activeClassName={styles["recipe-link"]}>
                    <div className={styles["recipe-card__title"]}>
                        <img src={picture} alt="recipe-picture"/>
                        <h5>{recipeName}</h5>
                        <p className={styles["recipe-card__ingredients-calories"]}>{ingredients} ingredients
                            | {calories} calories</p>
                        <p className={styles["recipe-card__time"]}>{time} min <img src={Time} alt="clock"/></p>
                    </div>
                </NavLink>
            </div>

    );
}

export default Recipecard;
