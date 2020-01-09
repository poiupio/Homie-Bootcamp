import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  INFO_ARTICLE,
  REMOVE_ARTICLE,
  ALL_ARTICLES
} from '../constants/actionTypes';

const articlesState = {
  articles: [],
  article: {},
  number_pages: 0,
  current_page: 1
};

function articlesReducer(state = articlesState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return [
        ...state.articles,
        {
          id: 'fff',
          title: action.title,
          content: action.content
        }
      ];
    case EDIT_ARTICLE:
      return {

      };
    case INFO_ARTICLE:
      return {
        ...state,
        article: action.article
      };
    case REMOVE_ARTICLE:
      return {

      };
    case ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles.articles,
        number_pages: action.articles.number_pages,
        current_page: action.articles.current_page
      };
    default:
      return state;
  }
}

export default articlesReducer;