import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
function Characterlist() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://breakingbadapi.com/api/characters`);
      setPosts(res.data);
      setLoading(false);
    };
    // axios.get(`https://breakingbadapi.com/api/characters`).then((res) => {
    //   setPosts(res.data);
    // });
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
    // if(loading){
    //     return <img src={process.env.PUBLIC_URL + 'loader.gif'} />;
    // }
  return (
      <div className="container">
        {loading ?
        <div className="loader">
        <img src={process.env.PUBLIC_URL + 'loader.gif'}  />
        </div>
         : '' }
        <h1>Breaking Bad API</h1>
        <div className="row">
        {
          currentPosts.map((item, index) => (        
            <Character data={item} key={index} />
          ))
        }
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
        </div>
      </div>
  );
}
export default Characterlist;
