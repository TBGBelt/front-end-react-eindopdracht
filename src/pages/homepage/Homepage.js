import React from "react";
import styles from './Homepage.module.css';
import Button from "../../components/button/Button";
import Herorecipe from "../../components/recipecard/Herorecipe";
import Searchbar from "../../components/searchbar/Searchbar";
// import recipeImage from "../../assets/images/recipe1.jpg"


//homepage overview

function Homepage() {

    return (
        <div className={styles["outer-container"]}>
            <div className={styles["hero__outer-container"]}>
                <div className={styles["hero__inner-container"]}>
                    <h1 className={styles["homepage-title"]}>delicious recipes</h1>
                    <p className={styles["homepage-subtitle"]}>Updated Daily</p>
                    <Button
                        buttonText="find recipes"
                    />
                </div>

                <div className={styles["header__feature-recipes"]}>
                    <div className={styles["feature-recipes"]}>
                        <div className={styles["feature-recipes__card"]}>
                            <Herorecipe
                                // picture={recipeImage}
                                recipeName="feature recipes"
                                ingredients="10"
                                calories="260"
                                time="10"
                            />
                        </div>
                        <div className={styles["feature-recipes__card"]}>
                            <Herorecipe
                                // picture={recipeImage}
                                recipeName="feature recipes"
                                ingredients="10"
                                calories="260"
                                time="10"
                            />
                        </div>
                        <div className={styles["feature-recipes__card"]}>
                            <Herorecipe
                                // picture={recipeImage}
                                recipeName="feature recipes"
                                ingredients="10"
                                calories="260"
                                time="10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Searchbar/>
        </div>
    );
}


export default Homepage;