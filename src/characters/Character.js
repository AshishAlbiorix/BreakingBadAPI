import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dob from "./Dob";
import Occupation from "./Occupation";
import Status from "./Status";
import Nickname from "./Nickname";
import Appearance from "./Appearance";

function Character(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="row">
      <div className="col-lg-4">
      <div className="user-img">
        <img src={props.data.img} className="img-fluid" />
      </div>
    </div>
      <div className="col-lg-8">
        <div className="text-center">
        <h4>{props.data.name}</h4>
          {show == true ? (
            <div className="content">
              <Dob dataDOB={props.data.birthday} />
              <Occupation dataOccpuation={props.data.occupation} />
              <Status dataStatus={props.data.status} />
              <Nickname datanickname={props.data.nickname} />
              <Appearance data={props.data.appearance} />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <Button onClick={() => { setShow(!show) }}>{show ? "Hide" : "Show"}</Button>
        </div>
      </div>
    </div>
  );
}
export default Character;
