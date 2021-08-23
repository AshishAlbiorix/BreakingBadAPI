import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

function App() {
  const [geturl, setGeturl] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios.get(`https://breakingbadapi.com/api/characters`).then((res) => {
      setGeturl(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Breaking Bad API</h1>
      <div className="container">
        <div className="row">
          {geturl.map((item, index) => (
            <div className="col-lg-3" key={index}>
              <div className="user-img">
                <img src={item.img} className="img-fluid" />
              </div>
              <div>
                <button onClick={()=>setShow(!show)} >{ show ? "Hide" : "Show"}</button>
              </div>
              {
                show ?            
              <div className="text-center">
                <h4>{item.name}</h4>
                <div className="content">
                  {item.birthday != "Unknown" ? (
                    <span>DOB: {item.birthday}</span>
                  ) : (
                    ""
                  )}
                  {item.occupation != "" ? (
                    <span>Occupation: {item.occupation}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              :  ''
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
