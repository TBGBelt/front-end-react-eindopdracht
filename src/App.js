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
import {ReactComponent as Facebook} from "./assets/icons/facebook.svg";
import {ReactComponent as LinkedIn} from "./assets/icons/linkedin.svg";
import {ReactComponent as Twitter} from "./assets/icons/twitter.svg";



function App() {



    return (
        <Router>
            <Topmenu
            title="The Clueless Cook"
            text1="home"
            text2="about"
            text3="calculator"/>
            <Switch>
                <Route exact path="/">
                <Homepage/>
            <Searchbar/>
                </Route>
                {/*<Route exact path="">*/}
                {/*<Recipepage/>*/}
                {/*</Route>*/}
                <Route exact path="/calculator">
                <Calculator/>
                </Route>
            </Switch>
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
