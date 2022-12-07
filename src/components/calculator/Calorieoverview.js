import React from "react";
import styles from "./Calorieoverview.module.css"

function Calorieoverview({ingredientName, calories, fat, carbs}) {

    return (
        <>
            <table className='calculator-result'>
                <tbody>
                <tr className={styles['calculator-result-data']}>
                    <td>{ingredientName}</td>
                    <td>{calories}</td>
                    <td>{fat}</td>
                    <td>{carbs}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default Calorieoverview;