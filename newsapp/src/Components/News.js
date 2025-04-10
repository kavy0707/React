import React, { Component } from 'react';
import Newsbar from "./Newsbar";
import PropTypes from 'prop-types';
import Loading from './loading';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    setprogress: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
    document.title = `${this.props.category} - NewsMonkey`;
  }

  async componentDidMount() {
    this.props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setprogress(50);
    const response = await fetch(url);
    const data = await response.json();
    this.props.setprogress(100);

    this.setState({
      articles: data.articles || [],
      loading: false,
      totalResults: data.totalResults || 0,
    });
  }

  async fetchMoreData() {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }

  render() {
    return (
      <div className='container my-50'>
        <h1 className='text-center' style={{ marginBottom: "-56px" }}>Top Headlines - {this.props.category}</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container row" style={{ marginTop: "50px" }}>
            {this.state.articles && this.state.articles.length > 0 ? 
            (
              this.state.articles.map((article, index) => (
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
}
