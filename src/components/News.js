import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";

function News(props) {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=da62c7d64b0f4de9802435c43bdff0d1&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);

    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
     // eslint-disable-next-line
  }, [])

  const handlePrevClick = async () => {
    setPage(page => page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page => page + 1);
    updateNews();
  };

    return(
      <NewsCard articles={articles} loading={loading} page={page} totalResults={totalResults} pageSize={props.pageSize} category={props.category} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
    )

  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
