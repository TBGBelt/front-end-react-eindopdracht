import React from "react";

function Calorietotal({totalCalories, totalFat, totalCarbs}) {

    return (
        <div className='calculator-result__outer-container'>
            <table className='calculator-result'>
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

export default Calorietotal;