import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profileimage from "./Profileimage";
import Dob from "./Dob";
import Occupation from "./Occupation"
import Status from "./Status"
import Nickname from "./Nickname"
import Appearance from "./Appearance"
import HideShow from "./HideShow"
import Name from "./Name"

function Character() {
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
    <div>
      <h1>Breaking Bad API</h1>
      <div className="container">
        {geturl.map((item, index) => {
          return (
            <div className="row" key={index}>
              <Profileimage imageData={item.img} />
              <div className="col-lg-8">

                <div className="text-center">
                    <Name nameData={item.name} />                  
                  {getid == item.char_id && show == true ?                      
                    <div className="content">                      
                      <Dob dataDOB={item.birthday}/>
                      <Occupation dataOccpuation={item.occupation}/>
                        <Status dataStatus={item.status}/>
                        <Nickname datanickname={item.nickname} />
                        <Appearance data={item.appearance}/>
                    </div>
                    : "" }
                </div>

                <div>
                  <Button
                    onClick={() => {
                      setShow(true);
                      getData(item.char_id);
                    }}
                  >
                    {getid == item.char_id && show ? "Hide" : "Show"}
                  </Button>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Character;
