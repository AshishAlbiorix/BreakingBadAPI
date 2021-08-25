import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
function Profileimage(props) {
  return (
    <div className="col-lg-4">
      <div className="user-img">
        <img src={props.imageData} className="img-fluid" />
      </div>
    </div>
  );
}
export default Profileimage;
