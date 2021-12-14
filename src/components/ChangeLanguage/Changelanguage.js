import React from "react";
import "./Changelanguage.css";
import { IconButton } from "@mui/material";
import { styled } from '@mui/material/styles'
import { useStateValue } from "../../assets/utility/StateProvider";

const Button = styled(IconButton)({
  background: "#fafafa",
  marginLeft: 10 + "px",
  fontSize: 1 + "rem",
  fontWeight: 600,
  "&:hover": {
    color: "#fafafa",
  },
});

function Changelanguage() {
  const [{ insEnglish }, dispatch] = useStateValue();

  const polishLanguage = () => {
    dispatch({
      type: "SET_POLISH",
    });
  };
  const englishLanguage = () => {
    dispatch({
      type: "SET_ENGLISH",
    });
  };
  return (
    <div className="changelanguage">
      <div title="Zmień język">
        <Button title="Polski" onClick={polishLanguage}>
          PL
        </Button>
        <Button title="English" onClick={englishLanguage}>
          EN
        </Button>
      </div>
    </div>
  );
}

export default Changelanguage;
