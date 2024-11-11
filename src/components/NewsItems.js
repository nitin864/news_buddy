import React, { Component } from 'react'

export class NewsItems extends Component {

  constructor(){
    super();
     
    this.state ={
        
    }
  }
    
  render() {
    let {title,description,imgurl,newsUrl,author,publishedAt,source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="badge rounded-pill bg-info"
            style={{ left: "0", zIndex: "1", position: "absolute" }}
          >
            {source}
          </span>
          <img
            src={
              !imgurl ? "https://wallpaperaccess.com/full/2112588.jpg" : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text">Author: {!author ? "Unknown" : author}</p>
            <p className="card-text">Published At: {publishedAt}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems
