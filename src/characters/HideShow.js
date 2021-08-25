import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
function HideShow(props){
    const [show, setShow] = useState(false);
    const [getid, setGetid] = useState("");
    function getData(id){        
        setGetid(id)
        if(id && show == true){
          setShow(false)
          console.log(show)
        }
      }
    return(
            <div>
            <Button onClick={()=> {
                setShow(true)
                props.onclick(props.btndata,show)
                getData(props.btndata,show)
            }}>
            {getid ==props.btndata && show ? "Hide" : "Show"}
            </Button>
            
            
            </div>
    )
}
export default HideShow;