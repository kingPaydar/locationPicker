import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/common/Header/Main";
import Layout from "./components/Layout/Main";

function App() {

  const callApi = () => {
    axios.get('mapbox.whatever...', {
      params: {
        BBOX: [-79.54069836850799, 43.589463188226745, -79.27123066211873, 43.79940068737784],
        query: 'coffee'
      }
    })
      .then
  }

  return (
    <div className="App">
      <Header />
      <Layout>
        <p>
          Hi Rojhan! This is super cool!
        </p>
        <button onClick={callApi}>call API</button>
      </Layout>
    </div>
  );
}

export default App;
