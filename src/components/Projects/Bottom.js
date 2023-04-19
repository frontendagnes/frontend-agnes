import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
function Bottom() {
  return (
    <a
      href="https://github.com/frontendagnes?tab=repositories"
      alt="All Projects"
    >
      <div title="Kliknięcie przeniesie Cię na stronę GitHub">
        <ArrowDownwardIcon sx={{ fontSize: 80 }} />
        <p>More..</p>
      </div>
    </a>
  );
}

export default Bottom;
