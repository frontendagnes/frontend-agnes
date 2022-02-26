import React from "react";
import { useStateValue } from "../../assets/utility/StateProvider";

//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function SnackBar() {
  const [{ alert }, dispatch] = useStateValue();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "ALERT_DEFAULT" });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={alert.message}
    >
      <Alert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;
