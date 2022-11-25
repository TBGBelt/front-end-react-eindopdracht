import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from "../../components/button/Button";
import Inputfield from "../../components/inputfield/Inputfield";
import Calculatorresult from "../../components/calculator/Calculatorresult";
import Calorieoverview from "../../components/calculator/Calorieoverview";
import Calorietotal from "../../components/calculator/Calorietotal";
import styles from './Calculator.module.css'

const apiKey = process.env.REACT_APP_INGREDIENT_KEY;
const apiID = process.env.REACT_APP_INGREDIENT_ID;

function Calculator() {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('')
    const [ingredient, setIngredient] = useState([]);
    const [calculator, setCalculator] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFat, setTotalFat] = useState(0);


    // useEffect(() => {

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
            console.log(result.data.parsed[0].label);
            const foundIngredient = result.data.hints[0];
            console.log(foundIngredient);
            setIngredient([...ingredient, result.data.hints[0]]);


        } catch (e) {
            console.error(e);
        }
    }

    // }, [input]);

    function onFormSubmit(e) {
        e.preventDefault();
        fetchIngredient(input);
    }


    function onAmountSubmit(e) {
        e.preventDefault();
        setCalculator([...calculator, [ingredient, amount]]);

        let newCalories = 0;
        Object.values(ingredient).map((result) => newCalories += result.food.nutrients.ENERC_KCAL * amount);
        setTotalCalories(totalCalories => totalCalories + newCalories);

        let newFat = 0;
        Object.values(ingredient).map((result) => newFat += result.food.nutrients.FAT * amount);
        setTotalFat(totalFat => totalFat + newFat);

        let newCarbs = 0;
        Object.values(ingredient).map((result) => newCarbs += result.food.nutrients.CHOCDF * amount);
        setTotalCarbs(totalCarbs => totalCarbs + newCarbs);

        setIngredient([]);
    }


    return (
        <>
            <div className={styles["calculator__outer-container"]}>
                <div className={styles["calculator__main-title"]}>
                    <h1>Food calculator</h1>
                </div>
                <div className={styles["calculator__search"]}>
                    <form className="ingredientSearch" onSubmit={onFormSubmit}>

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
                </div>
                <div className={styles["calculator__product-info"]}>
                    <table>
                        <thead className={styles["product-result-info"]}>
                        <tr>
                            <th>product</th>
                            <th>quantity</th>
                            <th>label</th>
                        </tr>
                        </thead>
                    </table>
                    {Object.keys(ingredient).length > 0 && ingredient.map((result) => (
                        <Calculatorresult
                            key={result.food.foodId}
                            ingredientName={result.food.label}
                            portionSize={Math.round(result.measures[0].weight)}
                            label="gram"
                        />
                    ))}
                </div>
                <div className={styles["servingAmount"]}>
                    <form onSubmit={onAmountSubmit}>

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
                        />
                    </form>
                </div>
                <div className={styles["calculator-result-info__table"]}>
                    <table>
                        <thead className={styles["calculator-result-info"]}>
                        <tr>
                            <th>product</th>
                            <th>calories</th>
                            <th>fat</th>
                            <th>carbs</th>
                        </tr>
                        </thead>
                    </table>
                    {Object.keys(calculator).length > 0 && calculator.map((array) => {
                        return array[0].map((result) => {
                            return (
                                <Calorieoverview
                                    key={result.food.nutrients.ENERC_KCAL}
                                    ingredientName={result.food.label}
                                    calories={Math.round(result.food.nutrients.ENERC_KCAL) * array[1]}
                                    fat={Math.round(result.food.nutrients.FAT) * array[1]}
                                    carbs={Math.round(result.food.nutrients.CHOCDF) * array[1]}

                                />
                            )
                        })
                    })}

                    {Object.keys(calculator).length > 0 &&
                        <Calorietotal
                            totalCalories={Math.round(totalCalories)}
                            totalFat={Math.round(totalFat)}
                            totalCarbs={Math.round(totalCarbs)}
                        />}
                </div>
            </div>
        </>
    );
}

export default Calculator;