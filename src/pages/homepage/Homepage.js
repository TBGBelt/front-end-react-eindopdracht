import React from "react";
import axios from "axios";
import Topmenu from "../../components/header/Topmenu";
import Footer from "../../components/footer/Footer";

//homepage overview + recipe search

function Homepage() {

    async function searchRecipe() {
        try {
            const result = await axios.get("https://api.edamam.com/api/recipes/v2", {
                params: {
                    type: "public",
                    app_id: "c804ae75",
                    app_key: "90f73244f33dbc5fc80f218800eedde6",
                    // q: searchQuery,
                    // mealType: chosenMealType ? chosenMealType : null,
                    // cuisineType: chosenCuisine ? chosenCuisine : null,
                    // diet: chosenDiet ? chosenDiet : null,
                    // time: chosenTime ? chosenTime : null,
                }
            })
        } catch (e) {
            console.error(e);
        }

    }
};
