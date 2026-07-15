// entry.jsx — INTEGRATION FILE (new, not part of the original project)
//
// Purpose: this is the file the router lazy-loads for the smart-clinic app.
// It re-creates exactly the global CSS imports that used to live in this
// project's own main.jsx (which is no longer the entry point in the merged
// app), then re-exports the ORIGINAL, untouched App.jsx.
//
// Nothing in App.jsx or below was modified.

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/home-login.css";

export { default } from "./App.jsx";
