import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./assets/utility/firebase";
import { useStateValue } from "./assets/utility/StateProvider";
// components
// import Generator from "./components/RosumeGenerator/Generator/Generator";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
// import Curriculum from "./components/Curriculum/Curriculum";
// import ReactProjects from "./components/ReactProjects/ReactProjects";
// import JsProjects from "./components/JsProjects/JsProjects";
const Login = lazy(() => import("./components/RosumeGenerator/Login/Login.js"));
const ReactProjects = lazy(() =>
  import("./components/ReactProjects/ReactProjects")
);
const JsProjects = lazy(() => import("./components/JsProjects/JsProjects"));
const Curriculum = lazy(() => import("./components/Curriculum/Curriculum"));
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch"));
const Generator = lazy(() =>
  import("./components/RosumeGenerator/Generator/Generator")
);

function App() {
  const renderLoader = () => <p>Loading...</p>;
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // auth.onAuthStateChanged((authUser) => {
    //   if (authUser) {
    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser,
    //     });
    //   } else {
    //     dispatch({
    //       type: "DELETE_USER",
    //     });
    //   }
    // });
    // dispatch({
    //   type: "SET_USER",
    //   user: null
    // })
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/resume-generator">
            <Suspense fallback={renderLoader()}>
              <Generator />
            </Suspense>
          </Route>
          <Route exact path="/login">
            <Suspense fallback={renderLoader()}>
              <Login />
            </Suspense>
          </Route>
          <Route exact path="/projects/purejs">
            <Suspense fallback={renderLoader()}>
              <JsProjects />
            </Suspense>
          </Route>
          <Route exact path="/projects/react">
            <Suspense fallback={renderLoader()}>
              <ReactProjects />
            </Suspense>
          </Route>
          <Route exact path="/resume-agnieszka.kaminska">
            <Suspense fallback={renderLoader()}>
              <Curriculum />
            </Suspense>
          </Route>
          <Route exact path="/">
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
          <Route path="*">
            <Suspense fallback={renderLoader()}>
              <NoMatch />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
