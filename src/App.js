import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Characterlist from './characters/Characterlist'

function App() {
  const [geturl, setGeturl] = useState([]);
  const [show, setShow] = useState(false);
  const [getid, setGetid] = useState("");
  useEffect(() => {
    axios.get(`https://breakingbadapi.com/api/characters`).then((res) => {
      setGeturl(res.data);
    });
  }, []);
  function getData(id){
    setGetid(id)
    if(id && show == true){
      setShow(false)
    }
  }
  return (
    
    <div className="App">
      <Characterlist/>
    </div>
  );
}

export default App;
