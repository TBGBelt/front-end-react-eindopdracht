import React from "react";
import {useState} from "react";
import axios from "axios";
import Button from "../button/Button";
import Inputfield from "../inputfield/Inputfield";
import Calculatorresult from "./Calculatorresult";

const apiKey = "58ec23312b4a3e36553f8c0dafcbd892";
const apiID = "931dac1a";

function Calculator() {
    const [input, setInput] = useState('')
    const [ingredient, setIngredient] = useState([]);

    function onFormSubmit(e) {
        e.preventDefault();

        fetchIngredient();
    }

    async function fetchIngredient() {
        try {
            const result = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
                params: {
                    app_id: apiID,
                    app_key: apiKey,
                    ingr: input,

                }
            })
            console.log(result.data);

            const foundIngredient = result.data.hints[0];
            console.log(foundIngredient);
            // console.log(result.data.hints[0]);
            setIngredient(result.data.hints[0]);
            console.log(ingredient);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <form className="ingredientSearch" onSubmit={onFormSubmit}>

                <h1>Food calculator</h1>

                <Inputfield
                    type="text"
                    name="find ingredient"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="zoek ingredient"
                />

                <Button type="submit"
                        buttonText="Zoek ingredient"
                />

            </form>
            {/*<div>*/}
            {/*    {ingredient.map((result) => (*/}
                    <Calculatorresult
                        // key={setIngredient}
                        // ingredientName={result.data.hints[0].food.label}
                        // portionSize={result.data.hints[0].measures[0].weight}
                        label="gram"
                    />
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );


}

export default Calculator;