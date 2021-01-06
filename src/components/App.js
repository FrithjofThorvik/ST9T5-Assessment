import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./Test";
import Result from "./Result";
// import Header from "./Header";
// import Menu from "./Menu";

function App() {
  return (
    <div className="app">
      <Router basename="/get-started">
        {/* <Header /> */}
        <Switch>
          <Route path="/result" component={Result}></Route>
          <Route path="/" component={Test}></Route>
          {/* <Route path="/" component={Menu}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
