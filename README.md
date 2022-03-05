# Portfolio ForontEnd Developer

Apliakcja zawiera projekty developera podzielone na dwa działy w jednym znajdują się wybrane projekty przy użyciu HTML, CSS oraz czystego javascript natomiast w drugim projekty wykonane za pomocą REACT .

Jako dodatek dodany został genrator Resume (CV) - który tworzy proste CV i pozwala je wydrukować do pdf. Generator jest bardzo prosty w uzyciu i nie posiada połączenia z bazą danych co znaczy, że nie trzeba się logować co za tym idzie nie zapisuje żadnych danych, należy używać go ostrożenie ponieważ jedno odświeżenie strony spowoduje utratę danych. 

Strona (oprócz generatora) jest napisana w dwóch wersjach językowych w nagłówku znajduje się switch do zmiany języka PL - polski,  EN - angielski.

edit: 5.03.2022 - Do strony został dodany plik sitemap.xml

## Contribute

- Source Code: [https://github.com/frontendagnes/frontend-agnes](https://github.com/frontendagnes/frontend-agnes)
- Issue Tracker: [https://github.com/frontendagnes/frontend-agnes/issues](https://github.com/frontendagnes/frontend-agnes/issues)
- View: https://frontend-agnes.pl

## Documantation

- [firebase](https://www.npmjs.com/package/firebase) - baza danych (deploy)

- [material-ui](https://material-ui.com/) - użyto ikon jak również prostego komonentu SnackBar do pokazywania powiadomień oraz useMediaQuery przy tworzeniu wersji RWD

- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - nawigacja na stronie

- [nanoid](https://www.npmjs.com/package/nanoid) - za pomocą tej aplikacji tworzę identyfikatory

- [react-number-format](https://www.npmjs.com/package/react-number-format) - obsługa inputów typu number oraz użycie maski dla tych inputów

- [html2canvas](https://www.npmjs.com/package/html2canvas) oraz [jspdf](https://www.npmjs.com/package/jspdf) - użyte wspólnie do drukowania CV do pdf. W związku z tym, iż jspdf nie obsługuje UTF-8, użyłam html2canvas do stworzenia zrzutu png faktury a później za pomocą pdf została zapisana do pliku pdf

- [styled-components](https://styled-components.com/) - stylizacja niektórych komponentów

- [classnames](https://github.com/JedWatson/classnames) - użyta do ustawienia dwóch różnych klas CSS dla jednego elementu w zależności od stanu.

- [react-use-keypress](https://www.npmjs.com/package/react-use-keypress) - użyte do reagowania na wciścinięcie klawisza, funkcja byłą potrzebna do ukrycia przycisku na stronie w moim CV po wciśnięciu klawisza "v" pojawia się button umożliwiający wydruk CV do PDF. 

-[react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent) - użyte do informacji o plikach cookie komponent ładnie tworzy pasek informacyjny który można stylizwoać do własnych potrzeb.

## Author

Agnieszka Kamińska ([agnieszka.kaminska@ksiegarnia.edu.pl](mailto:agnieszka.kaminska@ksiegarnia.edu.pl))

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
