import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Header />
          <Navbar />
          <div className="app__container">
            <Home />
            <div className="app__middle">
              <Skills />
              <Projects />
            </div>
            <Contact />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
