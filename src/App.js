
import './App.css';

// components
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="app__conatiner">
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;
