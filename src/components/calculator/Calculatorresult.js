import React from "react";
import styles from "./Calculatorresult.module.css"

function Calculatorresult({ingredientName, portionSize, label}) {

    return (
        <>
            <table className='calculator-result'>
                <tbody className={styles['calculator-search-result']}>
                <tr>
                    <td>{ingredientName}</td>
                    <td>{portionSize}</td>
                    <td>{label}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default Calculatorresult;