import './App.css';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Topmenu from './components/header/Topmenu';
import Footer from "./components/footer/Footer";
import Searchbar from "./components/searchbar/Searchbar";
import Homepage from "./pages/homepage/Homepage";
import {ReactComponent as Facebook} from "./assets/icons/facebook.svg";
import {ReactComponent as LinkedIn} from "./assets/icons/linkedin.svg";
import {ReactComponent as Twitter} from "./assets/icons/twitter.svg";



const apiKey = "90f73244f33dbc5fc80f218800eedde6";
const apiId = "c804ae75";



function App() {

    // async function fetchRecipe() {
    //     try {
    //         const result = await axios.get("https://api.edamam.com/api/recipes/v2/", {
    //             params: {
    //                 type: "public",
    //                 app_id: apiKey,
    //                 app_key: apiKey,
    //
    //             }
    //         })
    //         console.log(result.data.recipe);
    //     }catch (e) {
    //         console.error(e)
    //     }
    // } fetchRecipe();

    return (
        <Router>
            <Topmenu
            title="The Clueless Cook"
            text1="home"
            text2="about"
            text3="calculator"/>
            {/*<Switch>*/}
            {/*    <Route exact path="/">*/}
                <Homepage/>
            <Searchbar/>
            {/*    </Route>*/}
            {/*    <Route exact path="">*/}
            {/*    <Recipepage/>*/}
            {/*    </Route>*/}
            {/*    <Route exact path="calculator">*/}
            {/*    <CalculatorPage/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            <Footer
            footerTitle="about"
            footerText="Lorem Ipsum"
            />
            <Footer
            footerTitle="info"
            footerText="Lorem Ipsum"
            />
            <Footer
            footerTitle="socials"
            />
            <Facebook/>
            <LinkedIn/>
            <Twitter/>


        </Router>
    )
        ;
}

export default App;
