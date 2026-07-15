// main.jsx — INTEGRATION FILE (new)
//
// Single entry point for the merged app. Replaces the three separate
// main.jsx files (each project's own main.jsx is left untouched inside
// its folder but is no longer used as an entry point — see
// INTEGRATION.md for details).

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
