// AppRouter.jsx — INTEGRATION FILE (new)
//
// This is the ONLY place that wires the three independent projects
// together. It does not touch any component from any of the three apps.
//
// Route map:
//   /*          -> smart-clinic app (it owns its own internal routing
//                  for "/", "/login", "/register" via its own <Routes>,
//                  completely unchanged)
//   /doctor     -> doctor-dashboard app (single-page app, mounted as-is)
//   /reception  -> reception-dashboard app (single-page app, mounted as-is)
//   /patient    -> patient-dashboard app (single-page app, mounted as-is)
//
// Each app is lazy-loaded (React.lazy) so that its own global CSS
// imports (declared in its entry.jsx) are only fetched when that
// route is actually visited, avoiding cross-app CSS collisions.
//
// React Router v6 ranks static path segments ("/doctor", "/reception",
// "/patient") above a wildcard ("/*") automatically, regardless of the
// order the routes are declared in, so there is no ambiguity between
// the smart-clinic catch-all and the dashboard routes below.

import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SmartClinicApp = lazy(() => import("../apps/smart-clinic/entry.jsx"));
const DoctorDashboardApp = lazy(() =>
  import("../apps/doctor-dashboard/entry.jsx")
);
const ReceptionDashboardApp = lazy(() =>
  import("../apps/reception-dashboard/entry.jsx")
);
const PatientDashboardApp = lazy(() =>
  import("../apps/patient-dashboard/entry.jsx")
);

function RouteLoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "#666",
      }}
    >
      جارِ التحميل...
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        {/* Doctor dashboard — standalone single-page app, unchanged */}
        <Route path="/doctor" element={<DoctorDashboardApp />} />

        {/* Reception dashboard — standalone single-page app, unchanged */}
        <Route path="/reception" element={<ReceptionDashboardApp />} />

        {/* Patient dashboard — standalone single-page app, unchanged */}
        <Route path="/patient" element={<PatientDashboardApp />} />

        {/* Smart-clinic main site — owns "/", "/login", "/register"
            internally via its own <Routes>, completely unchanged */}
        <Route path="/*" element={<SmartClinicApp />} />
      </Routes>
    </Suspense>
  );
}
