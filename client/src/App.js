import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Body from "./Layout";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <>
        <Body>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Body>
      </>
    </Router>
  )
}

export default App