import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MusicId from "./routes/music-id";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/music/:id",
    element: <MusicId />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
