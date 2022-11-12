import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Time from "../../assets/icons/time.svg";
import Button from "../../components/button/Button";
import styles from './Recipepage.module.css'


const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";

function Recipepage() {
    const {recipeID} = useParams();
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [healthlabels, setHealthlabels] = useState([]);


    useEffect(() => {


        async function selectedRecipe() {
            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2/${recipeID}`, {
                    params: {
                        type: "public",
                        app_id: apiId,
                        app_key: apiKey,

                    }
                })


                const fetchedRecipe = result.data.recipe;
                const fetchedIngredient = result.data.recipe.ingredients;
                const fetchedHealthlabels = result.data.recipe.healthLabels;
                console.log(fetchedHealthlabels);
                console.log(fetchedIngredient)
                console.log(fetchedRecipe);
                setRecipe(result.data);
                setIngredients(result.data.recipe.ingredients);
                setHealthlabels(result.data.recipe.healthLabels);

            } catch (e) {
                console.error(e);
            }
        }

        selectedRecipe();

    }, []);


    return (
        <>
            <div className={styles["recipe-page-main__outer-container"]}>
                <div>
                    {Object.keys(recipe).length > 0 &&
                        <div>
                            <div className={styles["recipe-description__title"]}>
                                <h1>{recipe.recipe.label}</h1>
                                <p><img src={Time} alt="clock"/> {recipe.recipe.totalTime} min</p>

                            </div>
                            <img className={styles["recipe-page-main__image"]} src={recipe.recipe.image}
                                 alt="recipe image"/>

                            <p className={styles["recipe-page-main__recipe-description"]}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aperiam autem eum facere, harum non
                                omnis
                                tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum
                                tempore.
                                Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere,
                                harum
                                non omnis
                                tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum
                                tempore.
                                Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere,
                                harum
                                non omnis
                                tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum
                                tempore.
                                Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere,
                                harum
                                non omnis
                                tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum
                                tempore.
                                Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?
                            </p>


                            <div className={styles["recipe-page-main__ingredients"]}>
                                <h5>ingredient list</h5>
                                {ingredients.map((ingredients) => (
                                    <ul className={styles["recipe-page-main-ingredients__ingredient-list"]}>
                                        <li>{ingredients.text}</li>
                                    </ul>
                                ))}
                            </div>

                            <div className={styles["recipe-page-main__nutrients"]}>
                            <h5>nutrients</h5>
                            <tbody>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.ENERC_KCAL.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.ENERC_KCAL.unit}</td>
                            </tr>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.FAT.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.FAT.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.FAT.unit}</td>
                            </tr>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.CHOCDF.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.CHOCDF.unit}</td>
                            </tr>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.SUGAR.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.SUGAR.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.SUGAR.unit}</td>
                            </tr>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.PROCNT.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.PROCNT.unit}</td>
                            </tr>
                            <tr>
                                <td className={styles["recipe-nutrients-items__row-1"]}>{recipe.recipe.totalNutrients.NA.label}</td>
                                <td className={styles["recipe-nutrients-items__row-2"]}>{Math.round(recipe.recipe.totalNutrients.NA.quantity)}</td>
                                <td>{recipe.recipe.totalNutrients.NA.unit}</td>
                            </tr>
                            </tbody>
                            </div>

                            <h5>health labels</h5>
                            <div>
                            {healthlabels.map((healthlabels) => (
                                <Button
                                    buttonText={healthlabels.healthLabels}
                                />
                            ))}
                            </div>

                        </div>
                    }
                </div>
            </div>
        </>
    );
}


export default Recipepage;

