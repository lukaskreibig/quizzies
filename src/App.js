import "./App.css";
import Home from "./components/Home";
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
                <Route path="/inputselect" component={InputSelect} />
                <Route path="/quiz" component={Quiz} />
            </Switch>
        </div>
    );
}

export default App;
