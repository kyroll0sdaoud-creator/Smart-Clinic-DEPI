// entry.jsx — INTEGRATION FILE (new, not part of the original project)
//
// This project's own App.jsx already imports "./styles.css" directly,
// so this loader just re-exports it, unchanged, for the router to
// lazy-load as its own chunk.

export { default } from "./App.jsx";
