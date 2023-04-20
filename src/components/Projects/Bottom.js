import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Bottom({ href }) {
  return (
    <a href={href} alt="All Projects">
      <div title="Kliknięcie przeniesie Cię na stronę GitHub">
        <ArrowDownwardIcon sx={{ fontSize: 80 }} />
        <p>More..</p>
      </div>
    </a>
  );
}

export default Bottom;
