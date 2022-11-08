import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Time from "../../assets/icons/time.svg";


const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";

function Recipepage() {
    const recipeID = useParams();
    const id = recipeID;
    useEffect(() => {


        async function selectedRecipe() {
            try {
                const result = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}`, {
                    params: {
                        type: "public",
                        app_id: apiId,
                        app_key: apiKey,
                        id: id,
                    }
                })


                console.log(result.data)
                console.log(recipeID)

            } catch (e) {
                console.error(e)
            }
        }

        selectedRecipe();

    }, {id});


    return (
        <>

            <div>
                <h1>recipe title</h1>
                <img src={Time} alt="clock"/>
                <p>20 min</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere, harum non omnis
                    tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum tempore.
                    Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere, harum non omnis
                    tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum tempore.
                    Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere, harum non omnis
                    tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum tempore.
                    Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eum facere, harum non omnis
                    tempora. Hic impedit inventore iure laborum maxime minus provident quaerat ratione rerum tempore.
                    Consectetur eum explicabo hic illo molestias mollitia, quidem quisquam quos tempore ut?</p>
                {/*<img src= alt="recipe image"/>*/}

                <h5>ingredient list</h5>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>

                <h5>nutrients</h5>
                <tr>
                    <td>energy</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>energy</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>energy</td>
                    <td>1000</td>
                </tr>

                <h5>health labels</h5>
                <button>kidney-friendly</button>
                <button>egg-free</button>
                <button>peanut-free</button>
                <button>soy-free</button>
                <button>kidney-friendly</button>
                <button>egg-free</button>
                <button>peanut-free</button>
            </div>
        </>
    );

}


export default Recipepage;