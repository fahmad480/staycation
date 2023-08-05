import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import Landingpage from "pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Landingpage} />
      </Router>
    </div>
  );
}

export default App;
