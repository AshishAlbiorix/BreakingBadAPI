import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Character from "./Character";

function Characterlist() {
  const [geturl, setGeturl] = useState([]);
  useEffect(() => {
    axios.get(`https://breakingbadapi.com/api/characters`).then((res) => {
      setGeturl(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Breaking Bad API</h1>
      <div className="container">
        {
          geturl.map((item, index) => (
          <Character data={item} key={index}/>
          ))
        }
      </div>
    </div>
  );
}
export default Characterlist;
