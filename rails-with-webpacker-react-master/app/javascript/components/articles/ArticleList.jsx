import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addArticle, allArticles } from '../../actions/articles';
import PageButton from './PageButtonComponent';

const ArticleList = (props) => {
  const [per_page] = useState(3);
  
  useEffect(() => {
    props.listArticles(props.current_page, per_page);
  }, []);

  const changePage = (page) =>{
    return () => {
      props.listArticles(page, per_page);      
    }
  }

  let buttons = []
  for(let i = 1; i <= props.number_pages; i++){
    let selected = false;
    if (i == props.current_page) {selected = true}
    buttons.push(<PageButton value={i} selected={selected} per_page={per_page} changePage={changePage} key={i} />)
  }
  
  return (
    <div>
      <p>Pagina: {props.current_page}</p>
      {
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              {article.content}
              <hr />
            </div>
          );
        })
      }
      <button className="btn btn-outline-primary">
        <Link to={`/articles/new`}>Create Article</Link>
      </button>
      {
        buttons
      }
    </div>
  );
}
  
const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles,
    number_pages: state.articlesReducer.number_pages,
    current_page: state.articlesReducer.current_page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (title, content) => dispatch(addArticle(title, content)),
    listArticles: (current_page, current_per_page) => dispatch(allArticles(current_page, current_per_page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);