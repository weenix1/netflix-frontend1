import "./App.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";

const App = () => (
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/details/:movieID" component={MovieDetails} />
  </Router>
);

export default App;
