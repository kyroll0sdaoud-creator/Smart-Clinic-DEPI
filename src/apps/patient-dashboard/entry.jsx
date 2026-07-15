// entry.jsx — INTEGRATION FILE (new, not part of the original project)
//
// Re-creates the global CSS imports that used to live in this project's
// own main.jsx, then re-exports the ORIGINAL, untouched App.jsx.
// Nothing in App.jsx or below was modified.

import "./index.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export { default } from "./App.jsx";
