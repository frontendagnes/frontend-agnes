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
};

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
