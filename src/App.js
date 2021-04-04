import { React, useState } from "react";
import "./App.css";
import Header from "./components/common/Header/Main";
import Layout from "./components/Layout/Main";
import axios from "axios";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [response, setResponse] = useState(null);
  const [title, setTitle] = useState();
  const callApi = () => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?bbox=-79.54069836850799,43.589463188226745,-79.27123066211873,43.79940068737784&access_token=pk.eyJ1Ijoia2lhb29oIiwiYSI6ImNrbWh5ZzNzcDBjOGcycGw4bjNhYmJwYTkifQ.xTnMP341DkwkE2qPrwPJRQ`
      )
      .then((response) => {
        setResponse(response);
        const currentTitle = response.data.features.map((item, index) => {
          return <li key={`place-${index}`}>{item.place_name}</li>;
        });
        console.log(currentTitle);
        setTitle(currentTitle);
      });
  };

  return (
    <div className="App">
      <Header />
      <Layout>
        <p>Hi Rojhan! This is super cool!</p>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          placeholder="Search.."
        />
        <button onClick={callApi}>call API</button>
        <ul>{response && title}</ul>
      </Layout>
    </div>
  );
}

export default App;
