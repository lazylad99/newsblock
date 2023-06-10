import React from "react";

function NewsItem (props) {
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    let badgeUrl = newsUrl.split('/');
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.ndtv.com/common/images/ogndtv.png"
            }
            className="card-img-top img-fluid"
            style={{maxWidth: "100%", height: "250px"}}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5><a href={`https://${badgeUrl[2]}`} target="_blank"
              rel="noreferrer"><span className="badge rounded-pill text-bg-dark mb-2">{source}</span></a>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By: {author ? author : "Unknown"} | Published: {new Date(date).toDateString()} </small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}


export default NewsItem;
