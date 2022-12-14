import React, {useContext} from "react";
import {useState} from "react";
import axios from "axios";
import styles from './Searchbar.module.css'
import Recipecard from "../recipecard/Recipecard";
import Button from "../button/Button";
import Inputfield from "../inputfield/Inputfield";
import Singleselect from "../singleselect/Singleselect";


//declaring variables for API ID and KEY
const apiKey = process.env.REACT_APP_RECIPE_KEY;
const apiId = process.env.REACT_APP_RECIPE_ID;

//Initializing useStates
function Searchbar() {

    const [input, setInput] = useState('');
    const [mealtype, setMealtype] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [diet, setDiet] = useState("");
    const [time, setTime] = useState("");
    const [recipes, setRecipes] = useState([]);

//function for form submit and fetching recipes
    function onFormSubmit(e) {
        e.preventDefault();

        fetchRecipe();
    }

//API request function
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
            setRecipes(result.data.hits.slice(0, 15));
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <>
            {/*form with inputfield and single select dropdowns*/}

            <div className={styles["searchbar__outer-container"]}>
                <div className={styles["searchbar__inner-container"]}>
                    <form className={styles.searchbar} onSubmit={onFormSubmit}>

                        <Inputfield
                            type="text"
                            name="search"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Find a recipe"
                        />
                        <Singleselect
                            value={mealtype}
                            onChange={(e) => setMealtype(e.target.value)}
                        >
                            <option value="" disabled={mealtype}>Meal type</option>
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
                            <option value="" defaultValue={time}>Cooking Time</option>
                            <option value="0-15">0 - 15 min</option>
                            <option value="15-30">15 - 30 min</option>
                            <option value="30-60">30 - 60 min</option>
                            <option value="60%2B">60 min or longer</option>
                        </Singleselect>

                        <Button
                            buttonText='Search'
                        />
                    </form>
                </div>
            </div>

            {/*recipe cards displayed from search*/}
            <div className={styles["recipe-results"]}>
                {recipes.map((recipe) => (
                    <Recipecard
                        key={recipe.recipe.label}
                        recipeID={recipe.recipe.uri.split("_")[1]}
                        picture={recipe.recipe.image}
                        recipeName={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients.length}
                        calories={Math.round(recipe.recipe.calories)}
                        time={recipe.recipe.totalTime}
                    />
                ))}
            </div>
        </>
    )
        ;
}

export default Searchbar;

