import React from "react";
import "./Cookies.css";
import CookieConsent from "react-cookie-consent";
import { useStateValue } from "../../assets/utility/StateProvider";
import { Link } from "react-router-dom"
function Cookies() {
  const [{ isEnglish }] = useStateValue();
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="cookieInfo"
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "#ffffff",
        letterSpacing: "2px",
      }}
      buttonStyle={{
        background: "#3f4d70",
        fontSize: "1.1rem",
        color: "#ffffff",
        borderRadius: "5px",
      }}
      expires={30}
    >
      {!isEnglish ? (
        <div className="cookie">
          Strona wykorzystuje pliki cookies. Korzystając ze strony wyrażasz
          zgodę na wykorzystywanie plików cookies, <Link to="/cookie-info">czytaj...</Link>
        </div>
      ) : (
        <div className="cookie">
          This site uses cookies. By using the site you agree to the use of
          cookies, <Link to="/cookie-info">more...</Link>
        </div>
      )}
    </CookieConsent>
  );
}

export default Cookies;
