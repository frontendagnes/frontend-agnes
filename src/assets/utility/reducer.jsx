import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const initialState = {
  reactIcon: [<FontAwesomeIcon icon={faReact} />],
  pureIcons: [
    <FontAwesomeIcon icon={faHtml5} />,
    <FontAwesomeIcon icon={faCss3Alt} />,
    <FontAwesomeIcon icon={faJsSquare} />,
  ],
  isPhoto: true,
  isEdit: true,
  isEnglish: false,
  alert: {
    open: false,
    message: "",
    type: "success",
  },
  file: null,
  img: null,
  cvs: [
    // {
    //   name: "Jan Nowak",
    //   job: "Junior Frontend developer",
    //   email: "frontendagnes@gmail.com",
    //   phone: "666548954",
    //   skills: ["Prawo Jazdy", "Pisanie", "Czytanie"],
    //   work: [
    //     {
    //       id: "val-Z2oDQhsk",
    //       date: "6-2024 - 6-2024",
    //       title: "Ksiegowa",
    //       workplace: "AGNES",
    //       skills: ["kontakt z klientem", "pisanie", "liczenie"],
    //     },
    //   ],
    //   education: [
    //     {
    //       id: "val-dc3WdWTp",
    //       date: "4-2024 - 6-2024",
    //       title: "Średnie",
    //       workplace: "Zawodowa Średnia",
    //       skills: [],
    //     },
    //   ],
    //   courses: [
    //     {
    //       id: "val-Bumm1obX",
    //       date: "6-2024 - 6-2024",
    //       title: "Asystent",
    //       workplace: "Ośrodek krztałcenia",
    //       skills: [],
    //     },
    //   ],
    // },
  ],
  user: null,
  adminData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    //user
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "DELETE_USER":
      return {
        ...state,
        user: null,
      };
      //adminData
    case "SET_DATA":
      return {
        ...state,
        adminData: action.item
      };
    //img
    case "SET_IMG":
      return {
        ...state,
        img: action.item,
      };
    case "DELETE_IMG":
      return {
        ...state,
        img: null,
      };
    //file
    case "SET_PREVIEW":
      return {
        ...state,
        file: action.item,
      };
    case "DELETE_PREVIEW":
      return {
        ...state,
        file: null,
      };
    //photo
    case "PHOTO_YES":
      return {
        ...state,
        isPhoto: true,
      };
    case "PHOTO_NO":
      return {
        ...state,
        isPhoto: false,
      };
    //cvs
    case "SET_CVS":
      return {
        ...state,
        cvs: action.item,
      };
    //form
    case "EDIT_FORM":
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    //change language
    case "SET_ENGLISH":
      return {
        ...state,
        isEnglish: true,
      };
    case "SET_POLISH":
      return {
        ...state,
        isEnglish: false,
      };
    //Snackbar
    case "ALERT_SUCCESS":
      return {
        ...state,
        alert: {
          open: true,
          message: action.item,
          type: "success",
        },
      };

    case "ALERT_DEFAULT":
      return {
        ...state,
        alert: {
          open: false,
          message: "",
          type: "success",
        },
      };
    case "ALERT__OK":
      return {
        ...state,
        alert: {
          open: true,
          message: `Zalogowano Poprawnie. Witaj ${action.item}`,
          type: "success",
        },
      };
    case "ALERT_LOGOUT":
      return {
        ...state,
        alert: {
          open: true,
          message: `Wylogowano poprawnie. Zapraszamy ponownie ${action.item}`,
          type: "success",
        },
      };
    case "ALERT__ERROR":
      return {
        ...state,
        alert: {
          open: true,
          message: `UPS... coś poszło nie tak - ${action.item}`,
          type: "error",
        },
      };
    case "ALERT_REGISETER":
      return {
        ...state,
        alert: {
          open: true,
          message: `Rejestracja przebiegła pomyślnie. Witaj!`,
          type: "success",
        },
      };
    default:
      return state;
  }
};

export default reducer;
