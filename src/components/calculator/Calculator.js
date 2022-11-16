import React, {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import Button from "../button/Button";
import Inputfield from "../inputfield/Inputfield";
import Calculatorresult from "./Calculatorresult";
import Calorieoverview from "./Calorieoverview";

const apiKey = "58ec23312b4a3e36553f8c0dafcbd892";
const apiID = "931dac1a";

function Calculator() {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('')
    const [ingredient, setIngredient] = useState([]);
    // const [calories, setCalories] = useState([]);
    // const [carbs, setCarbs] = useState([]);
    // const [fat, setFat] = useState([])
    // const [totalCalories, setTotalCalories] = useState(0);
    // const [totalCarbs, setTotalCarbs] = useState(0);
    // const [totalFat, setTotalFat] = useState(0);

    function onFormSubmit(e) {
        e.preventDefault();
        fetchIngredient(input);
    }


    async function fetchIngredient(input) {
        try {
            const result = await axios.get("https://api.edamam.com/api/food-database/v2/parser", {
                params: {
                    app_id: apiID,
                    app_key: apiKey,
                    ingr: input,

                }
            })
            console.log(result.data);
            console.log(result.data.parsed[0].food.label);
            const foundIngredient = result.data.hints[0];
            console.log(foundIngredient);
            setIngredient([...ingredient, result.data.hints[0]]);
            console.log(ingredient);
            console.log(amount)

        } catch (e) {
            console.error(e);
        }
    }

    function onAmountSubmit(e) {
        e.preventDefault();
        addAmount(amount);
    }

    async function addAmount(amount) {
        try {
            setAmount([...amount]);
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
            <div>
                {Object.keys(ingredient).length > 0 && ingredient.map((result) => (
                    <Calculatorresult
                        key={result.food.foodId}
                        ingredientName={result.food.label}
                        portionSize={result.measures[0].weight}
                        label="gram"
                    />
                ))}
            </div>

            <form className="servingAmount" onSubmit={onAmountSubmit}>

                Amount
                <Inputfield
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                serving(s)

                <Button
                    type="submit"
                    buttonText="Add +"
                    onClick={addAmount}
                />
            </form>

            <div>
                {Object.keys(amount).length > 0 && ingredient.map((result) => (
                    <Calorieoverview
                        key={result.food.nutrients.ENERC_KCAL}
                        ingredientName={result.food.label}
                        calories={Math.round(result.food.nutrients.ENERC_KCAL) * amount}
                        fat={Math.round(result.food.nutrients.FAT) * amount}
                        carbs={Math.round(result.food.nutrients.CHOCDF) * amount}

                    />
                ))}
            </div>
        </div>
    );
}

export default Calculator;