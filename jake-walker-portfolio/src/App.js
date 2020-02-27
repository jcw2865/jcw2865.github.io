import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function App() {
  return (
    <Router>
      <div className="App">
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
