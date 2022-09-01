import React, { useEffect } from "react";
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
function AdminHome({data}) {
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
    <div className="adminhome">
      <h2>Panel administracyjny</h2>
      <div className="adminhome__wrapper">
        <div className="adminhome__number">
          Łączna liczba zapytań: <b>{adminData.length}</b>
        </div>
        <ul>
          {data ? (
            data.map((item, index) => (
              <li key={item.id}>
                <p>{index + 1}</p>
                <Link to={`/admin/details/${item.id}`}>
                  <p>{item.id}</p>
                </Link>
                <b>
                  {new Date(item.data.timestamp.seconds * 1000).toLocaleString(
                    "pl-PL"
                  )}
                </b>
              </li>
            ))
          ) : (
            <div>Nie ma żadnych zapytań</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AdminHome;
