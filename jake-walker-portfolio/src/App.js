import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
