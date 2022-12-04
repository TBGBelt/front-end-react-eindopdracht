import {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    })

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token){
            fetchUserData(token);
        } else {
            setAuthState({
                authState: false,
                user: null,
                status: 'done'
            });
        }
    }, [])

    async function fetchUserData(token) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token},`
                }
            });
            setAuthState({
                ...authState,
                authState: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    roles: response.data.roles,
                },
                status: "done",
            })
        } catch(error){
            localStorage.clear();
        }
    }

    function login(data) {
        localStorage.setItem('token', data.accessToken);
        setAuthState({
            ...authState,
            authState: true,
            user: {
                username: data.username,
                email: data.email,
                id: data.id,
                role: data.role,
            },
            status: "done",
        })
        history.push('/')
    }

    function logout(){
        localStorage.clear()
        setAuthState({
            authState: false,
            user: null,
            status: "done",
        });
        history.push('/')
    }

    const contextData = {
        authState: authState,
        user: authState.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {authState.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;