import { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

function NewsList() {
  const [arti, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  //   Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = arti.slice(indexOfFirstPost, indexOfLastPost);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        "https://api.currentsapi.services/v1/latest-news?apiKey=GV6fiZfLNjlDQHSVyT7IHwRyoK_wYFQ-Di3cwVOwIGSbIaVP"
      );
      setArticles(res.data.news);
      setLoading(false);
      console.log(res.data.news);
    };
    getArticles();
  }, []);

  return (
    <div className="main-item">
      <div className="news-item py-4 px-3">
        {currentPosts &&
          currentPosts.map((item) => {
            return <NewsItem item={item} loading={loading} />;
          })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={arti.length}
        paginate={paginate}
      />
    </div>
  );
}

export default NewsList;
