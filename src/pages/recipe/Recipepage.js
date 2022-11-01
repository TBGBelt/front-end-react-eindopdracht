import React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";

function Recipepage() {
    const {recipeID} = useParams();

    async function selectedRecipe() {
        try {

            const result = await axios.get("https://api.edamam.com/api/recipes/v2/{id}", {
                params: {
                    type: "public",
                    app_id: apiId,
                    app_key: apiKey,
                    id: recipeID,
                }
            })


            console.log(result.data.recipe)
            console.log(recipeID)
        } catch (e) {
            console.error(e)
        }
    }

    selectedRecipe();

    return (

        <div>
            <h1>recipe title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eveniet inventore minus molestiae
                perspiciatis quae quisquam ratione sequi similique sit!</p>
            <li>ingredient list</li>
            {/*<img src= alt="recipe image"/>*/}
        </div>

    );

}





export default Recipepage;