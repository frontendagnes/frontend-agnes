import React, { useEffect } from "react";
import "./Admin.css";
// api
import {
  onSnapshot,
  collection,
  db,
  orderBy,
  query,
} from "../assets/utility/firebase";
import { useStateValue } from "../assets/utility/StateProvider";
//components
import AdminMenu from "./AdminMenu/AdminMenu";
import Home from "./Home/Home";

function Admin() {
  const [{ user, adminData }, dispatch] = useStateValue();
  // useEffect(() => {
  //   if (user) {
  //     const ref = collection(db, "questionare");
  //     const sortRef = query(ref, orderBy("timestamp", "desc"));
  //     const unsb = onSnapshot(sortRef, (snap) => {
  //       dispatch({
  //         type: "SET_DATA",
  //         item: snap.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         })),
  //       });
  //     });
  //     return () => {
  //       unsb();
  //     };
  //   }
  // }, [user, dispatch]);
  return (
    <div className="admin">
      <div className="admin__left">
        <AdminMenu />
      </div>
      <div className="admin__right">
        <Home data={adminData}/>
      </div>
    </div>
  );
}

export default Admin;
