import React from "react";
import "./ReactProjects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import Project from "../Project/Project";
import Container from "../Container/Container";
import ButtonBack from "../ButtonBack/ButtonBack";
//images
import fbClone from "../../assets/images/fb-clone.webp";
import instaClone from '../../assets/images/instagram-clone.webp'
import amazonClone from '../../assets/images/amazone-clone.webp'
import shop from '../../assets/images/shop.webp'
import chatApp from '../../assets/images/chatApp.webp'
function ReactProjects() {
  const [{ reactIcon }] = useStateValue();
  return (
    <div className="reactprojects">
      <ButtonBack />
      <Container>
        <Project
          icons={reactIcon}
          title="Facebook Clone"
          img={fbClone}
          viewCode="https://github.com/zabula81/facebook-clone"
          live="https://facebook-clone-74351.web.app/"
          description="Koln popularnego media social Facebooka, w aplikacji można dodawać posty jak również zdjęcia, logowanie za pomocą kotna google. Aplikacja wykonana w React z wykorzystniem bazy danych Firebase."
          isView
        />
        <Project 
          icons={reactIcon} 
          title="Instagram Clone"
          img={instaClone}
          viewCode="https://github.com/zabula81/instagram-clone"
          live="https://social-app-bf925.web.app/"
          description="Klon Instagrma, w aplikacji można dodawac posty, komentarze like. Logowanie za pomocą loginu i hasła stworzone za pomocą firebase Authentication, dane postów itp. są przechowywane w bazie danych friebase. układ strony wykonany za pomocą flexboxa. Podczas rejestracji istnieje możliwość dodania swojego avatara,"
          isView 
          />
        <Project 
          icons={reactIcon} 
          title="Amazon Clone"
          img={amazonClone}
          viewCode="https://github.com/zabula81/amazone-clone"
          live="https://e-clone-eb7a4.web.app/"
          description="W aplikacji można złożyć zamówienie, po zalogowaniu się do sklepu można podejrzeć wcześniej złożone zamówienia. Nie zarejestrowany użytkowanik nie dokona zakupu. Logowanie za pomoca loginu i hałsa stworzone za pomocą firebase Authentication. "
          isView 
        />
        <Project 
          icons={reactIcon} 
          title="Shop" 
          img={shop}
          viewCode="https://github.com/zabula81/shop-demo"
          live="https://shop-a251f.web.app/"
          description="Demo sklepu internetowego. W aplikacji można dokonać zakupu oraz podejrzeć wcześniejsze zamówienia. Logowanie stworzone za pomocą firebase Authentication. Zalogować można się za pomocą loginu i hasła po wczesniejszej rejestracji ale również z wykorzystniem facebooka lub google."
          isView 
        />
        <Project 
          icons={reactIcon} 
          title="ChatApp" 
          img={chatApp}
          viewCode="https://github.com/zabula81/chatApp"
          live="https://czatapplication.herokuapp.com/"
          description='Moja pierwsza samodzielna aplikacja wykonana w React. Aplikacja czatu jak sama nazwa wskazuje służy do rozmowy. Na ekranie powitalnyn musimy podać nazwę użytkowanika która zostaje zapisana do LacalStorage, żeby po odświeżeniu strony się "nie zgubiła". Użytkownik widzi że została dodana nowa wiadomość może również wyszukać użytkowanika po nazwie. Widaomości dodane przez siebie może edytować oraz usuwać. Jako, że to moja pierwsza samodzielna aplikacja w react wymaga ona poprawy np. dodania weryfikacji użytkownika żeby nie było dwóch użytkowników z tą samą nazwą, co za tym idzie dodanie athentication w postaci logowania i wtedy zmienienie LocalStorage na np. ContextApi.'
          isView />
      </Container>
    </div>
  );
}

export default ReactProjects;
