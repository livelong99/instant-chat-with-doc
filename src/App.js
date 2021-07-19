import React from 'react';
import Dashboard from './Components/Dashboard';
import "./scss/dash-nav.scss";
import "./scss/dash-main.scss";
import "./scss/common.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard/home" exact><Dashboard sel={1} /></Route>
          <Route path="/dashboard/chat" exact><Dashboard sel={2} /></Route>
          <Route path="/dashboard/add" exact><Dashboard sel={3} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
