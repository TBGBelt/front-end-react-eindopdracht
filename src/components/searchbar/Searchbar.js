import React from "react";
import {useState} from "react";
import axios from "axios";
import styles from './Searchbar.module.css'
// import { ReactComponent as Time } from ".src/assets/icons/time.svg";
import Recipecard from "../recipecard/Recipecard";
import Button from "../button/Button";
import Inputfield from "../inputfield/Inputfield";
import Singleselect from "../singleselect/Singleselect";

const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";

function Searchbar() {
    const [input, setInput] = useState('');
    const [mealtype, setMealtype] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [time, setTime] = useState("");
    const [recipes, setRecipes] = useState([]);

    function onFormSubmit(e) {
        e.preventDefault();

        fetchRecipe();
    }

    async function fetchRecipe() {
        try {
            const result = await axios.get("https://api.edamam.com/api/recipes/v2", {
                params: {
                    type: "public",
                    app_id: apiId,
                    app_key: apiKey,
                    q: input,
                    mealType: mealtype ? mealtype : null,
                    cuisineType: cuisine ? cuisine : null,
                    diet: diet ? diet : null,
                    time: time ? time : null,
                }
            })
            console.log(result.data);


            const resultAmount = result.data.hits.slice(0, 15);
            setRecipes(result.data.hits.slice(0, 15));
            console.log(resultAmount);
            console.log(recipes);

        } catch (e) {
            console.error(e)
        }
    }


    return (
        <div className={styles['searchbar__outer-container']}>
            <div className={styles["searchbar__inner-container"]}>
                <form className={styles.searchbar} onSubmit={onFormSubmit}>

                    <Inputfield
                        type="text"
                        name="search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="zoek een recept"
                    />
                    <Singleselect
                        value={mealtype}
                        onChange={(e) => setMealtype(e.target.value)}
                    >
                        <option value="" defaultValue={mealtype}>Meal type</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="brunch">Brunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snack">Snack</option>
                        <option value="teatime">Tea Time</option>
                    </Singleselect>

                    <Singleselect
                        value={cuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                    >
                        <option value="" defaultValue={cuisine}>Cuisine</option>
                        <option value="american">American</option>
                        <option value="asian">Asian</option>
                        <option value="british">British</option>
                        <option value="caribbean">Caribbean</option>
                        <option value="central europe">Central Europe</option>
                        <option value="chines">Chinese</option>
                        <option value="eastern europe">Eastern Europe</option>
                        <option value="french">French</option>
                        <option value="indian">Indian</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="kosher">Kosher</option>
                        <option value="mediterranean">Mediterranean</option>
                        <option value="mexican">Mexican</option>
                        <option value="middle eastern">Middle Eastern</option>
                        <option value="nordic">Nordic</option>
                        <option value="south american">South American</option>
                        <option value="south east asia">Soath East Asia</option>
                    </Singleselect>

                    <Singleselect
                        value={diet}
                        onChange={(e) => setDiet(e.target.value)}
                    >
                        <option value="" defaultValue={diet}>Diet</option>
                        <option value="balanced">Balanced</option>
                        <option value="high-fiber">High-fiber</option>
                        <option value="high-protein">High-protein</option>
                        <option value="low-carb">Low-carb</option>
                        <option value="low-fat">Low-fat</option>
                        <option value="low-sodium">Low-sodium</option>
                    </Singleselect>

                    <Singleselect
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="" defaultValue={time}>Time</option>
                        <option value="0-15">0 - 15 min</option>
                        <option value="15-30">15 - 30 min</option>
                        <option value="30-60">30 - 60 min</option>
                        <option value="60%2B">60 min or longer</option>
                    </Singleselect>

                    <Button
                        buttonText='Zoek recept'
                    />
                </form>
            </div>
            <div className={styles["recipe-results"]}>
                {recipes.map((recipe) => (
                    <Recipecard
                        key={recipe.recipe.label}
                        recipeID={recipe.recipe.uri.split("_")[1]}
                        setRecipesHandler={setRecipes}
                        picture={recipe.recipe.image}
                        recipeName={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients.length}
                        calories={Math.round(recipe.recipe.calories)}
                        time={recipe.recipe.totalTime}
                    />))}
            </div>
        </div>
    )
        ;
}

export default Searchbar;

// <div className="recipe-card__outer-container">
//     <div className="recipe-card">
//         {recipes.map((recipe) => (
//             <div key={recipe.recipe.label}>
//                 <img src={recipe.recipe.image}/>
//                 <h3 className="recipe-card__title">{recipe.recipe.label}</h3>
//                 <p> {recipe.recipe.ingredients.length} ingredients
//                     | {Math.round(recipe.recipe.calories)} calories</p>
//                 <p>{recipe.recipe.totalTime} min</p>
//                 {/*<img src={Time} alt="clock"/>*/}
//             </div>
//         ))}
//     </div>
// </div>