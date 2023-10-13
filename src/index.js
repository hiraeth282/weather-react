import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import SearchEngine from "./SearchEngine";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchEngine />
    <br />
    <a href="#">Open source code by Evelyn Ewald</a>
  </React.StrictMode>
);
