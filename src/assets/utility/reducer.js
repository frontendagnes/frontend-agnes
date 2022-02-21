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
  isEdit: true,
  isEnglish: false,
  user: null,
  alert: {
    open: false,
    message: "",
    type: "success",
  },
  photo: [],
  cvs: []
  // cvs: {
  //   name: "Ola Fasola",
  //   job: "Sprzedawca",
  //   email: "ala@faSolarPanel.pl",
  //   phone: "678098567",
  //   skills: ["Sprzątanie", "Mycie Okien", "JEdznie pizzy"],
  //   work: [{
  //     date: "12-99 - 02-2022",
  //     title: "Magazyn",
  //     workplace: "Zakład kamy&kamyk",
  //     skills: ["ala", "ola", "pola"]
  //   },

  // ],
  //   education:[
  //   {
  //     date: "09-2012 - 01-2022",
  //     title: "Sklep",
  //     workplace: "SPożywczy",
  //     skills: ["ala", "ola", "pola"]
  //   }
  // ],
  //   courses:[{
  //     date: "12-99 - 02-2022",
  //     title: "Magazyn",
  //     workplace: "Zakład kamy&kamyk",
  //     skills: ["ala", "ola", "pola"]
  //   }]
  // }
};

const reducer = (state, action) => {
  switch (action.type) {
    //cvs
    case "SET_CVS":
      return{
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
    //photo
    case "SET_PHOTO":
      return{
        ...state,
        photo: action.photo,
      }
    // user
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
    //Snackbar
    case "ALLERT_DEFAULT":
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
