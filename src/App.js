import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import StarRating from "./components/StarRating";


function App() {
    return (
        <div className="App">
            <Home />
            <Quiz />
            <StarRating />
        </div>
    );
}

export default App;
