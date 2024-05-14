import { Route, Routes } from "react-router";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { Name } from "./context/Name/NameContext";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App h-screen w-screen">
      <Name.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Name.Provider>
    </div>
  );
}

export default App;
