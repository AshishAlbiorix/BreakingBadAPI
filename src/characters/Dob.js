function Dob(props){
    return (
        <span>
        {
            props.dataDOB != "Unknown" ? <span>DOB: {props.dataDOB}</span> :  "" 
        }
        </span>
    )
}
export default Dob;