import "./App.css";
import Header from "./components/common/Header/Main";
import Images from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={Images} alt="logo" />
      </nav>
      <Header />
    </div>
  );
}

export default App;
