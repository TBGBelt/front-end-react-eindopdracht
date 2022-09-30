import React from "react";
import { ReactComponent as Time } from "../../assets/icons/time.svg";
import styles from './Recipecard.module.css'

function Recipecard ({picture, recipeName, ingredients, calories, time}) {


    return (
        <div className={styles["recipe-card__outer-container"]}>
            <div className={styles["recipe-card"]}>
                <img src={picture}/>
                <h3 className={styles["recipe-card__title"]}>{recipeName}</h3>
                <p>{ingredients} ingredients | {calories} calories</p>
                <p>{time} min <img src={Time}/> </p>
            </div>
        </div>
    );
}

export default Recipecard;
