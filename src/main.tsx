import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicId from "./routes/music-id";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/music/:id" element={<MusicId />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
