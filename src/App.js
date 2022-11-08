import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Topmenu from './components/header/Topmenu';
import Footer from "./components/footer/Footer";
import Searchbar from "./components/searchbar/Searchbar";
import Homepage from "./pages/homepage/Homepage";
import Calculator from "./components/calculator/Calculator";
import Recipepage from "./pages/recipe/Recipepage";




function App() {



    return (
        <Router>
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
        </Router>
    )
        ;
}

export default App;
