import './App.css';
import React from 'react';

function App() {
    const fetchTestDatas = function () {
    fetch('/api/v1/fridges')
      .then(res => res.json())
      .then((response) => {
        console.log("Test datas response", response);
      })
      .catch((error) => {
        console.log("Error while fetching test datas", error);
      })
  }

  const fetchAnotherEndpoint = function () {
    fetch('/api/v1/images')
      .then(res => res.json())
      .then((response) => {
        console.log("Outra rota response", response);
      })
      .catch((error) => {
        console.log("Error while fetching outra rota", error);
      });
  }

  return (
    <div className="App">
      <button onClick={fetchTestDatas}>
        Fetch Test Dat
      </button>
      <button onClick={fetchAnotherEndpoint}>
        Fetch Another Endpoint
      </button>
    </div>
  );
}

export default App;
