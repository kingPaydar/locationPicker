import "./App.css";
import Header from "./components/common/Header/Main";
import Layout from "./components/Layout/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <p>
          Hi Rojhan! This is super cool!
        </p>
      </Layout>
    </div>
  );
}

export default App;
