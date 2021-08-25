function Appearance(props){
    //console.log(props.data)
    const rowLen = props.data.length;
    
    return(
        <span>Appearance :<span> </span>
            {
                props.data.map((rank, i) => {
                    return <span key={i}>{ (i ? ', ' : '') + rank }</span>;
                })
            }
      </span>
    )
}
export default Appearance;