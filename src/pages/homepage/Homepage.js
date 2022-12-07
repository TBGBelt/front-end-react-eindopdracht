import React, {useContext} from "react";
import styles from './Homepage.module.css';
import Button from "../../components/button/Button";
import Herorecipe from "../../components/recipecard/Herorecipe";
import Searchbar from "../../components/searchbar/Searchbar";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";


//homepage overview

function Homepage() {
    const {authState} = useContext(AuthContext);
    return (
        <>
            {/*main*/}

            <div className={styles["hero__outer-container"]}>
                <div className={styles["hero__inner-container"]}>
                    <h1 className={styles["homepage-title"]}>delicious recipes</h1>
                    <p className={styles["homepage-subtitle"]}>Updated Daily</p>
                    <Button
                        buttonText="find recipes"
                    />
                </div>

                {/*''hero'' recipes*/}

                <div className={styles["header__feature-recipes"]}>
                    <div className={styles["feature-recipes"]}>

                        <Herorecipe
                            recipeName="feature recipes"
                            ingredients="10"
                            calories="260"
                            time="10"
                        />


                        <Herorecipe
                            recipeName="feature recipes"
                            ingredients="10"
                            calories="260"
                            time="10"
                        />

                        <Herorecipe
                            recipeName="feature recipes"
                            ingredients="10"
                            calories="260"
                            time="10"
                        />

                    </div>
                </div>
            </div>

            {/*{authState === true ?*/}
            <Searchbar/>
                 {/*:*/}
                 {/*<div>*/}
                 {/*   <p>This content is only available for users, please <Link to='/inloggen'>login</Link></p>*/}
                 {/*</div>}*/}

        </>
    );
}


export default Homepage;