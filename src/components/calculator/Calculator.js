import React from "react";
import {useState} from "react";
import axios from "axios";
import Button from "../button/Button";
import Inputfield from "../inputfield/Inputfield";

const apiKey = "58ec23312b4a3e36553f8c0dafcbd892";
const apiID = "931dac1a";

function Calculator() {
    const [input, setInput] = useState('');
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
                    ingr: ingredient,

                }
            })
            console.log(result.data);
            setIngredient(result.data.parsed[0]);

        } catch (e) {
            console.error(e)
        }
    }

    return (
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

            {/*<div className="calculator-result">*/}
            {/*    {ingredient.map ((result) => (*/}
            {/*        <div key={result.data.parsed[0]}>*/}
            {/*            <p>{result.data.parsed[0].food.label}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </form>

    );


}

export default Calculator