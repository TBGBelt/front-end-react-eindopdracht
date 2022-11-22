import React from "react";

function Calculatorresult({ingredientName, portionSize, label}) {

    return (
        <div className='calculator-result__outer-container'>
            <table className='calculator-result'>
                <tbody className='calculator-result-data'>
                <tr>
                    <td>{ingredientName}</td>
                    <td>{portionSize}</td>
                    <td>{label}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
        ;

}

export default Calculatorresult;