function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <select className="form-control select-box" onChange={(e)=>props.select(e.target.value)}>
        <option value="8">Select</option>
        <option>5</option>
        <option>10</option>
        <option>20</option>
        <option>40</option>
        <option>60</option>
        <option>80</option>
        <option>100</option>
      </select>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => props.paginate(number)}
                href="#"
                className="active page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default Pagination;
