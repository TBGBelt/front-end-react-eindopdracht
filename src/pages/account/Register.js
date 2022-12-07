import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Inputfield from "../../components/inputfield/Inputfield";
import Button from "../../components/button/Button";
import styles from "./Register.module.css"

//Initializing useStates
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [succes, toggleSucces] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [registrationText, setRegistrationText] = useState('');

    //API post function
    async function userRegistration() {
        toggleSucces(false);
        toggleError(false);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    username: username,
                    email: email,
                    password: password,
                    role: ["user"]
                }
            );
            toggleSucces(true);
            setRegistrationText(response.data.message);
        } catch (e) {
            console.error(e);
            toggleError(true);
            setErrorText(error.response.data.message);

        }
    }

// user registration function with if/else statements for registration form
    function onRegisterSubmit(e) {
        e.preventDefault()
        toggleSucces(false);
        toggleError(false);
        if (email.includes("@") === true && username.length > 5 && password.length > 5) {
            userRegistration();
        } else {
            toggleError(true);
            setErrorText('Your input is invalid. The username and password length must be at least 6 characters. Also, make sure your e-mail address contains the @ character.')
        }

    }

    return (
        <>
            {/*main information and succes/error messages*/}
            <div className={styles["registration__outer-container"]}>
                <div className={styles["registration__title"]}>
                    <h1>registration</h1>
                </div>
                <div className={styles["registration__information"]}>
                    <p>you can register an account by filling in this form</p>
                </div>
                {succes &&
                    <span>
                {registrationText && <p>{registrationText}</p>}
                    </span>
                }

                {error &&
                    <span>
                    {error && <p>{errorText}</p>}
                    </span>
                }

                {/*registration form*/}
                <form onSubmit={onRegisterSubmit}>
                    email
                    <Inputfield
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@johndoe.com"
                    />

                    username
                    <Inputfield
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="JohnDoe"
                    />

                    password
                    <Inputfield
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="JohnDoe1"
                    />

                    <Button
                        type="submit"
                        buttonText="register"
                    />
                </form>
                <div className={styles["registration__information"]}>
                    <p>
                        Already have an account? Click <Link to="/inloggen">here to login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;