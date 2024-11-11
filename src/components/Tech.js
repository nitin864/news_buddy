import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  articles = [
 
  ];
  constructor() {
     
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
    };
  }


  handlePrevClick= async  ()=>{
     
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86bff55359fa47a5a3009a639b413675&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let pasedData = await data.json()
    
      this.setState({
      page: this.state.page -1,
      articles: pasedData.articles
    })
}

handleNextClick= async  ()=>{
  
 let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86bff55359fa47a5a3009a639b413675&page=${this.state.page + 1}`;
 let data = await fetch(url);
 let pasedData = await data.json()
  
 this.setState({
   page: this.state.page + 1,
   articles: pasedData.articles
 })
}
  
  async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86bff55359fa47a5a3009a639b413675";
  let data = await fetch(url);
  let pasedData = await data.json()
   
  this.setState({articles: pasedData.articles}) 
  }

  render() {
    let { title, description,  newsUrl,  urlToImage , } = this.props;
    return (
      <div className="container my-3">
        <h3>Tech - News</h3>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
 
                ></NewsItems>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary " onClick={this.handlePrevClick}>&#8592; Previous</button>
        <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &#8594;</button>
        </div>
      </div>
    );
  }
}

export default News;
