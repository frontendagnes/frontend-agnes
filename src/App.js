import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { auth } from "./assets/utility/firebase";
import { useStateValue } from "./assets/utility/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./assets/utility/firebase"
// mui
import { CircularProgress } from "@mui/material";
// components
// import Generator from "./components/RosumeGenerator/Generator/Generator";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Snackbar from "./components/Snackbar/Snackbar";
import ProintingResume from "./components/RosumeGenerator/PrintingResume/ProintingResume";
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
  const [{ photo }, dispatch] = useStateValue();
  const [dataImage, setDataImage] = useState([]);

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

  useEffect(() => {
    dispatch({ type: "SET_PHOTO", photo: dataImage });
    console.log(photo);
  }, [dataImage, dispatch, photo]);

    useEffect(() => {
    const unsuscribe = onSnapshot(
      collection(db, "photos"),
      (snapshot) => {
        setDataImage(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      },
      (error) => {
        dispatch({type: "ALERT__ERROR", item: error.message})
      }
    );
    return () => {
      unsuscribe();
    };
  }, [dispatch]);

  const renderLoader = () => 
  <div style={{
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    alignItems: "center",
  }}>
    <CircularProgress color="success" />
    <span style={{
      marginLeft: "10px",
      letterSpacing: "3px",
    }}>Loading...</span>
  </div>;

  return (
    <div className="app">
      <Header />
      <Suspense fallback={renderLoader()}>
      <Routes>
        <Route
          path="/resume-generator"
          element={   
              <Generator />
          }
        />
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/register"
          element={
              <Register />
          }
        />
        <Route
          path="/projects/purejs"
          element={
              <JsProjects />
          }
        />
        <Route
          path="/projects/react"
          element={
              <ReactProjects />
          }
        />
        <Route
          path="/resume-agnieszka.kaminska"
          element={
              <Curriculum />
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

        <Route path="/printingresume" element={<ProintingResume />} />

        <Route
          path="*"
          element={
              <NoMatch />
          }
        />
      </Routes>
      </Suspense>
      <Snackbar />
    </div>
  );
}

export default App;
