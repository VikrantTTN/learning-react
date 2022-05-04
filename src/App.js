import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [Mode, setMode] = useState("light");
  const toggleDarkMode = () => {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextApplication"
          mode={Mode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route exact path="/" element={<Form title="TextForm" mode={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
