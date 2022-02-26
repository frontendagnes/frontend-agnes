import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// mui
import { CircularProgress } from "@mui/material";
// components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const Snackbar = lazy(() => import("./components/Snackbar/Snackbar"));
const PrintingResume = lazy(() =>
  import("./components/RosumeGenerator/PrintingResume/ProintingResume")
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
  const renderLoader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <CircularProgress color="success" />
      <span
        style={{
          marginLeft: "10px",
          letterSpacing: "3px",
        }}
      >
        Loading...
      </span>
    </div>
  );

  return (
    <div className="app">
      <Header />
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/resume-generator" element={<Generator />} />
          <Route path="/projects/purejs" element={<JsProjects />} />
          <Route path="/projects/react" element={<ReactProjects />} />
          <Route path="/resume-agnieszka.kaminska" element={<Curriculum />} />
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
          <Route path="/printingresume" element={<PrintingResume />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Snackbar />
      </Suspense>
    </div>
  );
}

export default App;
