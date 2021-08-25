import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Characterlist from "./characters/Characterlist";

function App() {
  return (
    <div className="App">
      <Characterlist />
    </div>
  );
}

export default App;
