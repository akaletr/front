import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
      <div className={"app"}>
          <Header />
          <Navigation />
          <Main />
          <Footer />
      </div>
  );
}



export default App;
