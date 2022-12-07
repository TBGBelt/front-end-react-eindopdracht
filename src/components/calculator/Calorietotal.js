import React from "react";
import styles from "./Calorietotal.module.css"

function Calorietotal({totalCalories, totalFat, totalCarbs}) {

    return (
        <>
            <table className='calculator-result'>
                <tbody className={styles['calculator-result-data-total']}>
                <tr>
                    <td>Total</td>
                    <td>{totalCalories}</td>
                    <td>{totalFat}</td>
                    <td>{totalCarbs}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
        ;

}

export default Calorietotal;