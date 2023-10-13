import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import SearchEngine from "./SearchEngine";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchEngine />
    <br />
    <a href="https://github.com/hiraeth282/weather-react" target="_blank" rel="noreferrer">Open source code by Evelyn Ewald</a>
  </React.StrictMode>
);
