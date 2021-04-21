import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import { Switch, Route } from "react-router-dom"; 




function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default App;
