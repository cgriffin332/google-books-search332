import Saved from "./containers/Saved";
import Search from "./containers/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" compnent={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
