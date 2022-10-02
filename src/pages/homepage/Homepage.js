import React from "react";
import styles from './Homepage.module.css';
import Button from "../../components/button/Button";
import Recipecard from "../../components/recipecard/Recipecard";
import recipeImage from "../../assets/images/recipe1.jpg"


//homepage overview

function Homepage() {

    return (
        <div className={styles["hero__outer-container"]}>
            <div className={styles["hero__inner-container"]}>
                <h1 className={styles["homepage-title"]}>delicious recipes</h1>
                <p className={styles["homepage-subtitle"]}>Updated Daily</p>
                <Button
                    buttonText="find recipes"
                />
            </div>
            {/*<div className={styles["feature-recipes"]}>*/}
            {/*    <div className={styles["feature-recipes__card"]}>*/}
            {/*        <Recipecard*/}
            {/*            picture={recipeImage}*/}
            {/*            recipeName="feature recipes"*/}
            {/*            ingredients="10"*/}
            {/*            calories="260"*/}
            {/*            time="10"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={styles["feature-recipes__card"]}>*/}
            {/*        <Recipecard*/}
            {/*            picture={recipeImage}*/}
            {/*            recipeName="feature recipes"*/}
            {/*            ingredients="10"*/}
            {/*            calories="260"*/}
            {/*            time="10"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={styles["feature-recipes__card"]}>*/}
            {/*        <Recipecard*/}
            {/*            picture={recipeImage}*/}
            {/*            recipeName="feature recipes"*/}
            {/*            ingredients="10"*/}
            {/*            calories="260"*/}
            {/*            time="10"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}


export default Homepage;