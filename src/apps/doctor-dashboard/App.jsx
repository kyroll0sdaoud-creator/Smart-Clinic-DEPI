import Doctor from './pages/Doctor';

// The app only has one page for now, so App.jsx just renders it directly.
// (react-router was removed since there was only a single route.)
const App = () => (
  <div className="app-shell" dir="rtl">
    <Doctor />
  </div>
);

export default App;
