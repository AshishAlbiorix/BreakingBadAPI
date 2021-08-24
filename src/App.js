import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <h1>Breaking Bad API</h1>
      <div className="container">
        {geturl.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-lg-4" >
              <div className="user-img">
                <img src={item.img} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8">
            <div className="text-center">
            <h4>{item.name}</h4>
              { getid == item.char_id && show == true ? (
                  <div className="content">
                    {item.birthday != "Unknown" ? (
                      <span>DOB: {item.birthday}</span>
                    ) : (
                      ""
                    )}
                    {item.occupation != "" ? (
                      <span>Occupation: {item.occupation}</span>
                    ) : ""}
                    <span>Status: {item.status}</span>
                    <span>Nickname : {item.nickname}</span>
                    <span>appearance :
                    {
                    item.appearance.map((a,b)=>
                    <span>{a+","}</span>
                      
                    )
                  }</span>
                    {/* <span>appearance : {item.appearance}</span> */}
                  </div>
                
              ) :""}
              </div>
              <div>
              
                <Button onClick={() => {
                  setShow(true)
                  getData(item.char_id)        
                  }}>
                  {getid == item.char_id && show ? "Hide" : "Show"}
                </Button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
