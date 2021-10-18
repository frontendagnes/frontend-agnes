import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Curriculum from "./components/Curriculum/Curriculum";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/curriculum">
            <Curriculum />
          </Route>
          <Route path="/">
            <Navbar />
            <div className="app__container">
              <Home />
              <div className="app__middle">
                <Skills />
                <Projects />
              </div>
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
