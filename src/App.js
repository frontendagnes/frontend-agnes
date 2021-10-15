import "./App.css";

// components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
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
  );
}

export default App;
