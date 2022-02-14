import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LandingPage } from "pages";
import { Footer, Header } from "layouts";

import "assets/css/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Footer />
    </Router>
  );
}

export default App;
