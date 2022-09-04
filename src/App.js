import logo from "./logo.svg";
import "./App.css";
import React, { useRef } from "react";

function App() {
  let displayResponse = useRef();
  let animeIndexInput = useRef();
  // let animeValueInput = useRef();
  // let animeDisplay = useRef();

  document.body.style.cursor = "wait";
  document.getElementById("buttonContainer").style.cursor = "wait";
  document.getElementById("animeContainer").style.cursor = "wait";

  let getDataFromServer = async (source) => {
    let reqOptions = {
      method: "GET",
    };

    let rawData = await fetch(`http://localhost:9797/${source}`, reqOptions);

    let convertedData = await rawData.json();

    displayResponse.current.innerHTML = convertedData;
  };

  let getDataForAnime = async () => {
    let reqOptions = {
      method: "GET",
    };
    // let display=animeDisplay.current.innerHTML;
    let index = animeIndexInput.current.value;
    // let value = animeValueInput.current.value;

    let rawData = await fetch(`http://localhost:9797/anime`, reqOptions);

    let convertedData = await rawData.json();
    console.log(convertedData);

    displayResponse.current.innerHTML = convertedData[index].anime;
  };

  let serverTimer = () => {
    setTimeout(() => {
      displayResponse.current.innerHTML = `Establishing connection to Server....`;
    }, 3000);
    setTimeout(() => {
      displayResponse.current.innerHTML = `Connection established....`;
    }, 6000);
    setTimeout(() => {
      displayResponse.current.innerHTML = `Result will be displayed here.`;
    }, 9000);
  };
  serverTimer();

  setTimeout(() => {
    document.body.style.cursor = "auto";
    document.getElementById("buttonContainer").style.cursor = "auto";
    document.getElementById("animeContainer").style.cursor = "auto";
  }, 9000);

  return (
    <div id="App">
      <div id="buttonContainer">
        <button
          type="button"
          onClick={() => {
            getDataFromServer("planets");
          }}
        >
          PLANETS{" "}
        </button>{" "}
        <button
          type="button"
          onClick={() => {
            getDataFromServer("weekdays");
          }}
        >
          WEEKDAYS{" "}
        </button>{" "}
        <button
          type="button"
          onClick={() => {
            getDataFromServer("months");
          }}
        >
          MONTHS{" "}
        </button>{" "}
      </div>{" "}
      <div id="animeContainer">
        <input
          type="number"
          placeholder="Enter an index number (0-5)"
          ref={animeIndexInput}
        />{" "}
        <button
          type="button"
          onClick={() => {
            getDataForAnime();
          }}
        >
          ANIME{" "}
        </button>{" "}
      </div>
      <h1 ref={displayResponse}> </h1>{" "}
    </div>
  );
}

export default App;
