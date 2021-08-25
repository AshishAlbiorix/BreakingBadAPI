import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Profileimage from "./Profileimage";
import Dob from "./Dob";
import Occupation from "./Occupation";
import Status from "./Status";
import Nickname from "./Nickname";
import Appearance from "./Appearance";
import HideShow from "./HideShow";
import Name from "./Name";

function Character(props) {
  const [show, setShow] = useState(false);
  const [getid, setGetid] = useState("");
  return (
    <div className="row">
      <Profileimage imageData={props.data.img} />
      <div className="col-lg-8">
        <div className="text-center">
          <Name nameData={props.data.name} />
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
          {
            show ?
                <Button
                onClick={() => {
                    setShow(false);
                }}
                >
                    Hide
                </Button>
            :
                <Button
                onClick={() => {
                    setShow(true);
                }}
                >
                    Show
                </Button>
          }
        </div>
      </div>
    </div>
  );
}
export default Character;
