import React from "react";
import {useState} from "react";
import axios from "axios";

const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";

function Searchbar({searchRecipe}) {
    const [input, searchInput] = useState('')

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted)')
        searchRecipe(input);
    }

    // async function fetchRecipe() {
    //     try {
    //         const result = await axios.get("https://api.edamam.com/api/recipes/v2/", {
    //             params: {
    //                 type: "public",
    //                 app_id: apiKey,
    //                 app_key: apiKey,
    //
    //             }
    //         })
    //         console.log(result.data.recipe);
    //     }catch (e) {
    //         console.error(e)
    //     }
    // } fetchRecipe();

    return  (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
            name="search"
            value={input}
            onChange={(e) => searchInput(e.target.value)}
                placeholder="zoek een recept"
            />

            <select>
                <option value="" disabled selected>Meal type</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="brunch">Brunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Tea Time</option>
            </select>

            <select>
                <option value="" disabled selected>Cuisine</option>
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
            </select>

            <select>
                <option value="" disabled selected>Diet</option>
                <option value="balanced">Balanced</option>
                <option value="high-fiber">High-fiber</option>
                <option value="high-protein">High-protein</option>
                <option value="low-carb">Low-carb</option>
                <option value="low-fat">Low-fat</option>
                <option value="low-sodium">Low-sodium</option>
            </select>

            <select>
                <option value="" disabled selected>Time</option>
                <option value="0-15">0 - 15 min</option>
                <option value="15-30">15 - 30 min</option>
                <option value="30-60">30 - 60 min</option>
                <option value="60%2B">60 min or longer</option>
            </select>
            <button type="submit">
                Zoeken
            </button>
        </form>
    );
}

export default Searchbar