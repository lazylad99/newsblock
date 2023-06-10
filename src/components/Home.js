import React,{useState} from "react";
import Search from "./Search";
import NewsCard from "./NewsCard";

function Home(props) {
  const [searchURL, setSearchURL] = useState(" ");
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);
    let data = await fetch(searchURL);
    let parsedData = await data.json();

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  function handleSearch(query) {
    // Perform search logic here and update state
    // const newUrl = ;
    setSearchURL(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=da62c7d64b0f4de9802435c43bdff0d1&page=${page}&pageSize=${props.pageSize}`);
    updateNews();
  }

  const handlePrevClick = async () => {
    setPage(page => page === 1 ? page : page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page => page + 1);
    updateNews();
  };


  return (
    <div className="container text-light">
      <div className="row justify-content-center align-items-center" style={{marginTop: "120px"}}>
        <div className="col-lg-8">
          <p className="text-light search-title">Search news articles around the world and get updated with the latest news.</p>
          <Search onSearch={handleSearch} />
          {articles ? <NewsCard articles={articles} loading={loading} totalResults={totalResults} updateNews={updateNews} pageSize={props.pageSize} page={page} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
            : <h6>Sorry! No Such Results Found</h6> }
        </div>
      </div>
    </div>
  );
}

export default Home;
