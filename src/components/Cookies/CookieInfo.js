import React from "react";
import "./Cookies.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import CookieIcon from "@mui/icons-material/Cookie";
//components
import Header from "../Header/Header";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
function CookieInfo() {
  const [{ isEnglish }] = useStateValue();
  return (
    <div>
      <Header />
      <ButtonBack />
      {!isEnglish ? (
        <div className="cookiesInfo">
          <div className="cookiesInfo__header">
            <h2>Polityka Ciasteczek</h2>
            <CookieIcon sx={{ fontSize: "62px", color: "#3f4d70" }} />
          </div>
          <div className="cookiesInfo__body">
            <div>
              Strona internetowa{" "}
              <strong>
                <a href="https://frontend-agnes.pl">
                  https://frontend-agnes.pl
                </a>{" "}
              </strong>
              nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem
              informacji zawartych w plikach cookies. Pliki cookies (tzw.
              „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
              tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika
              Serwisu i przeznaczone są do korzystania ze stron internetowych
              Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z
              której pochodzą, czas przechowywania ich na urządzeniu końcowym
              oraz unikalny numer. Podmiotem zamieszczającym na urządzeniu
              końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do
              nich dostęp jest operator Serwisu z siedzibą pod adresem Sadowa 4,
              59-550 Wojcieszów.
              <p>Pliki cookies wykorzystywane są w celu:</p>
              dostosowania zawartości stron internetowych Serwisu do preferencji
              Użytkownika oraz optymalizacji korzystania ze stron internetowych;
              w szczególności pliki te pozwalają rozpoznać urządzenie
              Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową,
              dostosowaną do jego indywidualnych potrzeb; tworzenia statystyk,
              które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu
              korzystają ze stron internetowych, co umożliwia ulepszanie ich
              struktury i zawartości; utrzymanie sesji Użytkownika Serwisu (po
              zalogowaniu), dzięki której Użytkownik nie musi na każdej
              podstronie Serwisu ponownie wpisywać loginu i hasła; W ramach
              Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
              „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
              Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są
              w urządzeniu końcowym Użytkownika do czasu wylogowania,
              opuszczenia strony internetowej lub wyłączenia oprogramowania
              (przeglądarki internetowej). „Stałe” pliki cookies przechowywane
              są w urządzeniu końcowym Użytkownika przez czas określony w
              parametrach plików cookies lub do czasu ich usunięcia przez
              Użytkownika. W ramach Serwisu stosowane są „niezbędne” pliki
              cookies, umożliwiające korzystanie z usług dostępnych w ramach
              Serwisu, np. uwierzytelniające pliki cookies wykorzystywane do
              usług wymagających uwierzytelniania w ramach Serwisu; W wielu
              przypadkach oprogramowanie służące do przeglądania stron
              internetowych (przeglądarka internetowa) domyślnie dopuszcza
              przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
              Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
              dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
              szczególności w taki sposób, aby blokować automatyczną obsługę
              plików cookies w ustawieniach przeglądarki internetowej bądź
              informować o ich każdorazowym zamieszczeniu w urządzeniu
              Użytkownika Serwisu. Szczegółowe informacje o możliwości i
              sposobach obsługi plików cookies dostępne są w ustawieniach
              oprogramowania (przeglądarki internetowej). Operator Serwisu
              informuje, że ograniczenia stosowania plików cookies mogą wpłynąć
              na niektóre funkcjonalności dostępne na stronach internetowych
              Serwisu. Więcej informacji na temat plików cookies dostępnych jest
              w sekcji „Pomoc” w menu przeglądarki internetowej.
            </div>
          </div>
        </div>
      ) : (
        <div className="cookiesInfo">
          <div className="cookiesInfo__header">
            <h2>Cookie Policy</h2>
            <CookieIcon sx={{ fontSize: "56px", color: "#3f4d70" }} />
          </div>
          <div>
            Website{" "}
            <a href="https://frontend-agnes.pl">https://frontend-agnes.pl</a>{" "}
            website collects any information by automatic means, with the
            exception of information contained in cookies. Cookies (so-called
            "cookies") are IT data, in particular text files, which are stored
            in the terminal equipment of the Website User and are intended for
            use on the Website. Cookies usually contain the name of the website
            from which they come, the time of storing them on the terminal
            equipment and a unique number. The entity placing cookies on the
            Service User's terminal equipment and accessing them is the Service
            Operator with registered office at Sadowa 4, 59-550 Wojcieszow.
            <p>Cookies are used for the following purposes</p>
            adjusting the content of the Website to the User's preferences and
            optimising the use of websites; in particular these files enable
            recognition of the Website User's device and appropriate display of
            the website, adjusted to the User's individual needs; creating
            statistics that help understand how Website Users use websites,
            which enables improvement of their structure and content;
            maintaining a session of the Website User (after logging in), thanks
            to which the User does not have to re-enter login and password on
            each subpage of the Website "session" (session cookies) and
            "persistent" cookies (persistent cookies). Session" cookies are
            temporary files that are stored in the final device of the User
            until logging out, leaving the website or switching off software
            (web browser). "Permanent" cookies are stored in the final device of
            the User for the time specified in the parameters of cookies or
            until they are deleted by the User. Within the Service "necessary"
            cookies are used, enabling use of services available within the
            Service, e.g. authentication cookies used for services requiring
            authentication within the Service; In many cases software used for
            browsing web pages (Internet browser) by default allows storage of
            cookies in User's end device. Users of the Website may at any time
            change their settings concerning cookies. These settings can be
            changed in particular in such a way as to block the automatic
            handling of cookies in the settings of your web browser or inform on
            their timely placement in the equipment of User of the Service.
            Detailed information on the possibility and the ways of using
            cookies are available in the settings of your software (web
            browser). The Operator of the Website informs that restrictions on
            the use of cookies may affect some of the functionalities available
            on the Website. More information on cookies is available in the
            "Help" section in the menu of the Internet browser.
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieInfo;
