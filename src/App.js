import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Topmenu from './components/header/Topmenu';
import Footer from "./components/footer/Footer";
function App() {
    return (
        <Router>
            <Topmenu/>
            {/*<Switch>*/}
            {/*    <Route exact path="/">*/}
            {/*    <Homepage/>*/}
            {/*    </Route>*/}
            {/*    <Route exact path="">*/}
            {/*    <Recipepage/>*/}
            {/*    </Route>*/}
            {/*    <Route exact path="calculator">*/}
            {/*    <CalculatorPage/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            <Footer/>
        </Router>
    )
        ;
}

export default App;
