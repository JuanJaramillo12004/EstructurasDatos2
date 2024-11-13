import "./App.css";
import React from "react";
import { PokemonApp, TodoApp, NavComponent } from "./components/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <div className="navContainer">
        <NavComponent />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon" element={<PokemonApp />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
