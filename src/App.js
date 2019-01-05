import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Article from './Article';
import SideBar from './SideBar';
import Header from './Header';



const articlesInfo = {
  currentId: '0',
  articles: articles, //json.jsを読み込んでおくこと
};
function searchCurrentArticle(currentId){
  for(const article of articlesInfo.articles){
    if (article.id === currentId){
      return article;
    }
  }
  return {};
}

export default class App extends Component {
  render() {
    return (
       <div className="App">
	    <Header/>
            <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Article content={searchCurrentArticle(articlesInfo.currentId).content}/>
              </Col>

              <Col xs={12} md={4}>
                <SideBar articlesInfo={articlesInfo}/>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
