import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Analytics from "./Components/Analytics";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
