import './App.css';
import {

    Switch,
    Route,
} from 'react-router-dom';
import Topmenu from './components/header/Topmenu';
import Footer from "./components/footer/Footer";
import Searchbar from "./components/searchbar/Searchbar";
import Homepage from "./pages/homepage/Homepage";
import Calculator from "./components/calculator/Calculator";
import Recipepage from "./pages/recipe/Recipepage";
import styles from "./pages/recipe/Recipepage.module.css";




function App() {



    return (
        <>
            <div className={styles["outer-container"]}>
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
            </Switch>
            <Footer/>
            </div>
        </>
    )
        ;
}

export default App;
