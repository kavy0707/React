import React, { useEffect, useState } from "react";
import Newsbar from "./Newsbar";
import PropTypes from "prop-types";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category} - NewsMonkey`;
    componentDidMount();
  }, [props.category]);

  const fetchMoreData = async () => {
    setpage((prevPage) => prevPage + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    setarticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
    settotalResults(parsedData.totalResults);
  };

  const componentDidMount = async () => {
    props.setprogress(0);
    setloading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

    props.setprogress(50);
    const response = await fetch(url);
    const data = await response.json();
    props.setprogress(100);

    setarticles(data.articles || []);
    settotalResults(data.totalResults || 0);
    setloading(false);
  };

  return (
    <div className="container my-50">
      <h1 className="text-center" style={{ marginBottom: "-56px", marginTop: "56px" }}>
        Top Headlines - {props.category}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container row" style={{ marginTop: "50px" }}>
          {articles.length > 0 ? (
            articles.map((article, index) => (   // map it run like looping
              <div className="col-md-4" key={article.url || `${index}-${article.title}`}>
                <Newsbar
                  title={article.title ? article.title.slice(0, 40) : "No Title Available"}
                  description={article.description ? article.description.slice(0, 80) : "No Description Available"}
                  imgurl={article.urlToImage || "https://images.nintendolife.com/c8176dc1440d7/1280x720.jpg"}
                  author={article.author}
                  publishedAt={article.publishedAt}
                  newsurl={article.url}
                />
              </div>
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setprogress: PropTypes.func.isRequired,
};

export default News;
