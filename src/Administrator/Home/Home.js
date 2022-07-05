import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  db,
  orderBy,
  query,
} from "../../assets/utility/firebase";
import { useStateValue } from "../../assets/utility/StateProvider";
import { Link } from "react-router-dom";
import "./Home.css";
function AdminHome() {
  const [{ user, adminData }, dispatch] = useStateValue();

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
    <div className="admin__home">
      <div className="admin__wrapper">
        <div className="admin__number">
          Łączna liczba zapytań: <b>{adminData.length}</b>
        </div>
        <ul>
          {adminData ? adminData.map((item, index) => (
            <li key={item.id}>
              <p>{index + 1}</p>
              <Link to={`/admin/details/${item.id}`}>
                <p>{item.id}</p>
              </Link>
              <b>
                {new Date(
                  item.data.timestamp.seconds * 1000
                ).toLocaleDateString("pl-PL")}
              </b>
            </li>
          )) : "Nie ma żadnych zapytań"}
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;
