import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import SearchIcon from "@material-ui/icons/Search";
import Quotes from "./Quotes"
function Characterlist() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [search, setSearch] = useState("");

  function selectBoxFun(selectedVal){
    setPostsPerPage(selectedVal)
  }
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://breakingbadapi.com/api/characters`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleFilter = (event) => {
    setSearch(event.target.value);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.filter((item)=>{
    if (search == "") {
      return item;
    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  }).slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      
      {loading ? (
        <div className="loader">
          <img src={process.env.PUBLIC_URL + "loader.gif"} />
        </div>
      ) : null}
      <h1>Breaking Bad API</h1>
      <Quotes/>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            onChange={handleFilter}
          />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="row">
        {currentPosts.map((item, index) => (
            <Character data={item} key={index} />
          ))}
        {loading == false ? (
          <div className="col-lg-12 pagination-box">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              select={selectBoxFun}
            />
          </div>
        ) : null}

      </div>
    </div>
  );
}
export default Characterlist;
