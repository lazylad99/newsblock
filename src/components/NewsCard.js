import React from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";

export default function NewsCard(props) {

  return (
    <div className="container mt-3 mb-3">
      <h1 className="category-title">{props.category && (props.category).charAt(0).toUpperCase() + (props.category).slice(1) + " Headlines"}</h1>
      {props.loading && <Spinner />}
      <div className="row">
        {!props.loading &&
          props.articles.map((element) => {
            return (
               <div className="col-md-4 mt-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      {props.articles ? <div className="container d-flex justify-content-between p-2">
        <button
          disabled={props.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={props.handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={props.page + 1 > Math.ceil(props.totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={props.handleNextClick}
        >
          Next &rarr;
        </button>
      </div> : " "}
    </div>
  );
}
