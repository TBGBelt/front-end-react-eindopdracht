import React from "react";

function Calculatorresult({ingredientName, portionSize, label}) {

    return (
        <div className='calculator-result__outer-container'>
            <table className='calculator-result'>
                <thead className="calculator-result-info">
                <tr>
                    <th>product</th>
                    <th>quantity</th>
                    <th>label</th>
                </tr>
                </thead>
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