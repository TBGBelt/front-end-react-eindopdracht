import React from "react";
import styles from "./Calorieoverview.module.css"

function Calorieoverview({ingredientName, calories, fat, carbs}) {

    return (
        <>
            <table className='calculator-result'>
                <tbody className={styles['calculator-result-data']}>
                <tr>
                    <td>{ingredientName}</td>
                    <td>{calories}</td>
                    <td>{fat}</td>
                    <td>{carbs}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
        ;

}

export default Calorieoverview;