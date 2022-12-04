import './App.css';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Topmenu from './components/header/Topmenu';
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Calculator from "./pages/calculator/Calculator";
import Recipepage from "./pages/recipe/Recipepage";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";




function App() {



    return (
        <>
            <div className="outer-container">
            <Topmenu/>

            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/recipe/:recipeID">
                    <Recipepage/>
                </Route>
                <Route path="/calculator">
                    <Calculator/>
                </Route>
                <Route path="/inloggen">
                    <Login/>
                </Route>
                <Route path="/registreren">
                    <Register/>
                </Route>
            </Switch>
            <Footer/>
            </div>
        </>
    )
        ;
}

export default App;
