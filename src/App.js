import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Characterlist from './characters/Characterlist'

function App() {
  return (
    
    <div className="App">
      <Characterlist/>
    </div>
  );
}

export default App;
