import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { auth, onAuthStateChanged } from "./assets/utility/firebase.jsx";
import { renderLoader } from "./assets/utility/functions.jsx";
import { useStateValue } from "./assets/utility/StateProvider.jsx";
// api
import {
  collection,
  db,
  onSnapshot,
  orderBy,
  query,
} from "./assets/utility/firebase.jsx";
// components
import Cookies from "./components/Cookies/Cookies.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
const CookieInfo = lazy(() => import("./components/Cookies/CookieInfo.jsx"));
const Snackbar = lazy(() => import("./components/Snackbar/Snackbar.jsx"));
const PrintingResume = lazy(() =>
  import("./components/ResumeGenerator/PrintingResume/ProintingResume.jsx")
);
const ReactProjects = lazy(() =>
  import("./components/ReactProjects/ReactProjects.jsx")
);

const JsProjects = lazy(() => import("./components/JsProjects/JsProjects.jsx"));
const Curriculum = lazy(() => import("./components/Curriculum/Curriculum.jsx"));
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch.jsx"));
const Generator = lazy(() =>
  import("./components/ResumeGenerator/Generator/Generator.jsx")
);
const Questionare = lazy(() => import("./Questionare/Questionare.jsx"));
const Admin = lazy(() => import("./Administrator/Admin.jsx"));
const Auth = lazy(() => import("./Administrator/Auth/Auth.jsx"));
const AdminDetails = lazy(() =>
  import("./Administrator/AdminDetails/AdminDetails.jsx")
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
