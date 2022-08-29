import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import List2 from "./List2/List2";
import List3 from "./List3/List3";
import List4 from "./List4/List4";
import List5 from "./List5/List5";
import List6 from "./List6/List6";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/List2" element={<List2 />} />
        <Route path="/List3" element={<List3 />} />
        <Route path="/List4" element={<List4 />} />
        <Route path="/List5" element={<List5 />} />
        <Route path="/List6" element={<List6 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
