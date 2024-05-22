import React from "react";
import { Outlet } from "react-router-dom";
function DetailsWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DetailsWrapper;
