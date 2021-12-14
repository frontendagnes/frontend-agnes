import React from "react";
import "./ReactProjects.css";
import { useStateValue } from "../../assets/utility/StateProvider";
import Project from "../Project/Project";
import Container from "../Global/Container/Container";
import ButtonBack from "../Global/ButtonBack/ButtonBack";
//images
import fbClone from "../../assets/images/fb-clone.webp";
import instaClone from '../../assets/images/instagram-clone.webp'
import amazonClone from '../../assets/images/amazone-clone.webp'
import shop from '../../assets/images/shop.webp'
import chatApp from '../../assets/images/chatApp.webp'
function ReactProjects() {
  const [{ reactIcon, isEnglish }] = useStateValue();
  return (
    <div className="reactprojects">
      <ButtonBack />
      {!isEnglish ? 
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
          description="Klon Instagrma, w aplikacji można dodawac posty, komentarze like. Logowanie za pomocą loginu i hasła stworzone za pomocą firebase Authentication, dane postów itp. są przechowywane w bazie danych friebase. układ strony wykonany za pomocą flexboxa. Podczas rejestracji istnieje możliwość dodania swojego avatara."
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
          description='Moja pierwsza samodzielna aplikacja wykonana w React. Aplikacja czatu jak sama nazwa wskazuje służy do rozmowy. Na ekranie powitalnyn musimy podać nazwę użytkowanika która zostaje zapisana do LacalStorage, żeby po odświeżeniu strony się "nie zgubiła". Użytkownik widzi że została dodana nowa wiadomość może również wyszukać użytkowanika po nazwie. Widaomości dodane przez siebie może edytować oraz usuwać. Jako, że to moja pierwsza samodzielna aplikacja w react wymaga ona poprawy np. dodania weryfikacji użytkownika żeby nie było dwóch użytkowników z tą samą nazwą, co za tym idzie dodanie authentication w postaci logowania i wtedy zmienienie LocalStorage na np. ContextApi.'
          isView />
      </Container> 
      :
      <Container>
        <Project
          icons={reactIcon}
          title="Facebook Clone"
          img={fbClone}
          viewCode="https://github.com/zabula81/facebook-clone"
          live="https://facebook-clone-74351.web.app/"
          description="Coln of popular social media Facebook, in application you can add posts as well as photos, login using google catn. Application made in React using Firebase database."
          isView
        />
        <Project 
          icons={reactIcon} 
          title="Instagram Clone"
          img={instaClone}
          viewCode="https://github.com/zabula81/instagram-clone"
          live="https://social-app-bf925.web.app/"
          description="Instagrma clone, in app you can add posts, like comments. Login with login and password created with firebase Authentication, data of posts etc are stored in friebase database. Page layout made with flexbox. During registration there is a possibility to add your avatar."
          isView 
          />
        <Project 
          icons={reactIcon} 
          title="Amazon Clone"
          img={amazonClone}
          viewCode="https://github.com/zabula81/amazone-clone"
          live="https://e-clone-eb7a4.web.app/"
          description="In the application you can place an order, after logging in to the store you can view previously placed orders. Not registered user will not make a purchase. Login with username and heaps created with firebase Authentication."
          isView 
        />
        <Project 
          icons={reactIcon} 
          title="Shop" 
          img={shop}
          viewCode="https://github.com/zabula81/shop-demo"
          live="https://shop-a251f.web.app/"
          description="Demo of online store. In the application you can make a purchase and preview previous orders. Login created with firebase Authentication. You can log in using login and password after previous registration but also using facebook or google."
          isView 
        />
        <Project 
          icons={reactIcon} 
          title="ChatApp" 
          img={chatApp}
          viewCode="https://github.com/zabula81/chatApp"
          live="https://czatapplication.herokuapp.com/"
          description='My first standalone application made in React. Chat application as the name suggests is used to chat. On welcome screen we have to give user name which is saved to LacalStorage, so that after refreshing page it is not "lost". When user sees that a new message has been added, he can also search for user by name. Messages added by user can be edited and deleted. As this is my first standalone application in react, it needs some improvements, e.g. adding user verification so that there are not two users with the same name, which means adding authentication in the form of login and then changing LocalStorage to e.g. ContextApi.'
          isView />
      </Container>
    }
      
    </div>
  );
}

export default ReactProjects;
