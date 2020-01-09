import axios from "axios";

class ArticlesApi {
  static getArticles(page_param, per_page_param) {
    return axios.get('api/articles/', {
      params:{
        page: page_param,
        per_page: per_page_param
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }

  static addArticle(title, content) {
    return axios.post('api/articles', {
      title: title,
      content: content
    })
      .then(response => {
        return response.data;
      })
      .catch(error => console.log('error', error));
  }

  static getArticle(id) {
    return axios.get(`api/articles/${id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
}

export default ArticlesApi;