import React from "react";
import "./Changelanguage.css";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useStateValue } from "../../assets/utility/StateProvider";

const Button = styled(IconButton)({
  fontSize: 1 + "rem",
  fontWeight: 600,
});

function Changelanguage() {
  const [{ isEnglish }, dispatch] = useStateValue();

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
        <Button
          style={{
            background: isEnglish ? "transparent" : "#fafafa",
            color: isEnglish ? "#fafafa" : "#000000",
          }}
          title="Polski"
          onClick={polishLanguage}
        >
          PL
        </Button>
        <Button
          style={{
            background: !isEnglish ? "transparent" : "#fafafa",
            color: !isEnglish ? "#fafafa" : "#000000",
          }}
          title="English"
          onClick={englishLanguage}
        >
          EN
        </Button>
      </div>
    </div>
  );
}

export default Changelanguage;
