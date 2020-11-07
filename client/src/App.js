import Saved from "./containers/Saved";
import Search from "./containers/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useEffect } from "react";
// import API from "./utils/API";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

function App() {
  // useEffect(() => {
  //   API.getBooks("holes")
  //     .then((response) => {
  //       console.log(response.data.items);
  //       console.log(response.data.items[0].volumeInfo.title);
  //       console.log(response.data.items[0].volumeInfo.authors);
  //       console.log(response.data.items[0].volumeInfo.imageLinks.smallThumbnail);
  //       console.log(response.data.items[0].volumeInfo.description);
  //       console.log(response.data.items[0].selfLink);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
