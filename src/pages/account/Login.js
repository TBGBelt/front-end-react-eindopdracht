import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Inputfield from "../../components/inputfield/Inputfield";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import styles from "./Login.module.css"

function Login() {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);

    async function postUserLogin() {
        toggleError(false);
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    username: username,
                    password: password,
                }
            )
            login(response.data)
        } catch (e) {
            console.error(e)
            toggleError(true);
        }
    }

    function onLoginSubmit(e) {
        e.preventDefault()
        toggleError(false);
        postUserLogin();
    }

    return (
        <>
            <div className={styles["login__outer-container"]}>
                <div className={styles["login__title"]}>
                <h1>login</h1>
                </div>
                <div className={styles["login__information"]}>
                <p>you can log into your acccount here</p>
                </div>
                {error && <p>incorrect username and/or password, please try again.</p>}

                <form onSubmit={onLoginSubmit}>
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
                        buttonText="login"
                    />
                </form>
                <div className={styles["login__information"]}>
                <p>no account? Click <Link to="/registreren">here to register an account</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;