import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./path/landingPage.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
    </Routes>
  );
}

export default Router;
