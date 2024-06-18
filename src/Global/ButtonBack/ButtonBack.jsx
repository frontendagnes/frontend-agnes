import React, { useState } from "react";
import "./ButtonBack.css";
import { useNavigate } from "react-router-dom";
import OpenModal from "../OpenModal/OpenModal";
//mui
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ButtonBack({ title, openModal, style }) {
  const history = useNavigate();
  const [openWarring, setOpenWarrning] = useState(false);

  const warriningNo = () => {
    setOpenWarrning(false);
  };

  const warrnigYes = () => {
    setOpenWarrning(false);
    history("/");
  };

  const backToHomepage = () => {
    if (openModal) {
      setOpenWarrning(true);
    } else {
      setOpenWarrning(false);
      history("/");
    }
  };
  return (
    <div className="buttonback" title={title}>
      <OpenModal
        text="Opuszczając stronę stracisz wszytkie dane! Jesteś pewien?"
        open={openWarring}
        setOpen={setOpenWarrning}
        handleClickNo={warriningNo}
        handleClickYes={warrnigYes}
      />
      <button type="button" onClick={backToHomepage} style={style}>
        <ArrowBackIcon /> back home
      </button>
    </div>
  );
}

export default ButtonBack;
