import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import FetchError from "./components/FetchError";
import Dashboard from "./Dashboard";
// import "@tremor/react/dist/esm/tremor.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:drugname" element={<Dashboard />} />
        <Route path="/error" element={<FetchError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
