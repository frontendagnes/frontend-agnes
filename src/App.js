import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Snackbar from "./components/Snackbar/Snackbar";
import { onAuthStateChanged } from "firebase/auth";
import ProintingRosume from "./components/RosumeGenerator/PrintingRosume/ProintingRosume";
// import Curriculum from "./components/Curriculum/Curriculum";
// import ReactProjects from "./components/ReactProjects/ReactProjects";
// import JsProjects from "./components/JsProjects/JsProjects";
const Login = lazy(() => import("./components/RosumeGenerator/Login/Login.js"));
const Register = lazy(() =>
  import("./components/RosumeGenerator/Regieter/Register.js")
);
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
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "DELETE_USER",
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/resume-generator"
          element={
            <Suspense fallback={renderLoader()}>
              <Generator />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={renderLoader()}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={renderLoader()}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/projects/purejs"
          element={
            <Suspense fallback={renderLoader()}>
              <JsProjects />
            </Suspense>
          }
        />
        <Route
          path="/projects/react"
          element={
            <Suspense fallback={renderLoader()}>
              <ReactProjects />
            </Suspense>
          }
        />
        <Route
          path="/resume-agnieszka.kaminska"
          element={
            <Suspense fallback={renderLoader()}>
              <Curriculum />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="app__container">
                <Home />
                <div className="app__middle">
                  <Skills />
                  <Projects />
                </div>
                <Footer />
              </div>
            </>
          }
        />
       
        <Route path="/printingrosume" element={<ProintingRosume />} />
        
        <Route
          path="*"
          element={
            <Suspense fallback={renderLoader()}>
              <NoMatch />
            </Suspense>
          }
        />
        
      </Routes>
      <Snackbar />
    </div>
  );
}

export default App;
