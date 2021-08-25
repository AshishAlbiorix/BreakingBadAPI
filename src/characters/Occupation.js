function Occupation(props) {
  return (
    <div>
      <span>
        Occupation :<span> </span>
        {props.dataOccpuation.map((item, index) => {
          return <span key={index}>{(index ? ", " : '') + item}</span>;
        })}
      </span>
    </div>
  );
}
export default Occupation;
