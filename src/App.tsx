import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LandingPage } from "pages";
import { Footer, Header } from "layouts";
import { MyMark } from "components/MyMark";

import "assets/css/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Footer />
      <MyMark />
    </Router>
  );
}

export default App;
