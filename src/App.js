import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { renderLoader } from "./assets/utility/functions";
import { useStateValue } from "./assets/utility/StateProvider";
import { auth, onAuthStateChanged } from "./assets/utility/firebase";
// api
import {
  onSnapshot,
  collection,
  db,
  orderBy,
  query,
} from "./assets/utility/firebase.js";
// components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cookies from "./components/Cookies/Cookies";
const CookieInfo = lazy(() => import("./components/Cookies/CookieInfo"));
const Snackbar = lazy(() => import("./components/Snackbar/Snackbar"));
const PrintingResume = lazy(() =>
  import("./components/ResumeGenerator/PrintingResume/ProintingResume")
);
const ReactProjects = lazy(() =>
  import("./components/ReactProjects/ReactProjects")
);

const JsProjects = lazy(() => import("./components/JsProjects/JsProjects"));
const Curriculum = lazy(() => import("./components/Curriculum/Curriculum"));
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch"));
const Generator = lazy(() =>
  import("./components/ResumeGenerator/Generator/Generator")
);
const Questionare = lazy(() => import("./Questionare/Questionare"));
const Admin = lazy(() => import("./Administrator/Admin.js"));
const Auth = lazy(() => import("./Administrator/Auth/Auth.js"));
const AdminDetails = lazy(() =>
  import("./Administrator/AdminDetails/AdminDetails.js")
);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({ type: "DELETE_USER" });
      }
    });
    return () => {
      authUser();
    };
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const ref = collection(db, "questionare");
      const sortRef = query(ref, orderBy("timestamp", "desc"));
      const unsb = onSnapshot(sortRef, (snap) => {
        dispatch({
          type: "SET_DATA",
          item: snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        });
      });
      return () => {
        unsb();
      };
    }
  }, [user, dispatch]);

  return (
    <div className="app">
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
              </>
            }
          />
          <Route
            path="/projects/purejs"
            element={
              <>
                <Header />
                <JsProjects />
              </>
            }
          />
          <Route
            path="/projects/react"
            element={
              <>
                <Header />
                <ReactProjects />
              </>
            }
          />
          <Route
            path="/resume-agnieszka.kaminska"
            element={
              <>
                <Header />
                <Curriculum />
              </>
            }
          />
          <Route
            path="/resume-generator"
            element={
              <>
                <Header />
                <Generator />
              </>
            }
          />
          <Route path="/printingresume" element={<PrintingResume />} />
          <Route
            path="/questionare"
            element={
              <>
                <Header />
                <Questionare />
              </>
            }
          />
          <Route path="/admin" element={<>{user ? <Admin /> : <Auth />}</>} />
          <Route
            path="admin/details/:questionareId"
            element={<AdminDetails />}
          />
          <Route path="/cookies-info" element={<CookieInfo />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NoMatch />
              </>
            }
          />
        </Routes>
        <Snackbar />
      </Suspense>
      <Cookies />
    </div>
  );
}

export default App;
