import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/portfolio";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
