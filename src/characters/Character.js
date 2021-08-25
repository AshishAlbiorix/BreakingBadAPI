import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Character(props) {
  const [show, setShow] = useState(false);
  return (<div>
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
              <span>
                {props.data.birthday != "Unknown"
                  ? "DOB:" + props.data.birthday
                  : ""}
              </span>
              <span>
                Occupation :
                {props.data.occupation.map(
                  (item, index) => (index ? ", " : " ") + item
                )}
              </span>
              <span>{props.data.status}</span>
              <span>{props.data.nickname}</span>
              <span>
                Appearance :
                {props.data.appearance.map(
                  (apper, appindex) => (appindex ? ", " : " ") + apper
                )}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="btn-div">
          <Button
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Character;
