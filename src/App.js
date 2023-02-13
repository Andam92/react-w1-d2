import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/NavbarComponent";
import Welcome from "./components/Welcome";
/* import MyCard from "./components/Card"; */
import Books from "./books/scifi.json";
import MyMain from "./components/Main";

function App() {
  return (
    <>
      <MyNav home="HOME" about="ABOUT" browse="BROWSE" />
      <Welcome bgColor="black" opacity={0.8} />
      {/* <MyCard font="18px" /> */}
      <MyMain category={Books} />
      <MyFooter
        about="About"
        jobs="Jobs"
        contacts="Contacts"
        heightValue={100}
      />
    </>
  );
}

export default App;
