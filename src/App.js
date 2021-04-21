import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Switch, Route } from "react-router-dom";
import StarRating from "./components/StarRating";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/InputSelect" component={InputSelect} />
            </Switch>
        </div>
    );
}

export default App;
