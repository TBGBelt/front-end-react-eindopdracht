import React from "react";

function Calorieoverview({ingredientName, calories, totalCalories, fat, totalFat, carbs, totalCarbs}) {

    return (
        <div className='calculator-result__outer-container'>
            <table className='calculator-result'>
                <thead className="calculator-result-info">
                <tr>
                    <th>product</th>
                    <th>calories</th>
                    <th>fat</th>
                    <th>carbs</th>
                </tr>
                </thead>
                <tbody className='calculator-result-data'>
                <tr>
                    <td>{ingredientName}</td>
                    <td>{calories}</td>
                    <td>{fat}</td>
                    <td>{carbs}</td>
                </tr>
                </tbody>
                <tbody className='calculator-result-data-total'>
                <tr>
                    <td>total</td>
                    <td>{totalCalories}</td>
                    <td>{totalFat}</td>
                    <td>{totalCarbs}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
        ;

}

export default Calorieoverview;