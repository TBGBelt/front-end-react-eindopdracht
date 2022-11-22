import React from "react";

function Calorieoverview({ingredientName, calories, fat, carbs}) {

    return (
        <div className='calculator-result__outer-container'>
            <table className='calculator-result'>
                <tbody className='calculator-result-data'>
                <tr>
                    <td>{ingredientName}</td>
                    <td>{calories}</td>
                    <td>{fat}</td>
                    <td>{carbs}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
        ;

}

export default Calorieoverview;