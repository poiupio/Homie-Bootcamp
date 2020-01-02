import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';

const ArticleEdit = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`api/articles/${props.match.params.id}`)
      .then(response => response.data)
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch(error => console.log('error', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`api/articles/${props.match.params.id}`, {
      title: title,
      content: content
    })
      .then(response => {
        return response.data;
      })
      .then(data => {
        props.history.push(`/articles/${data.id}`);
      })
      .catch(error => console.log('error', error));
  }

  const handleChange = (event) => {
    if (event.target.name == 'title') return setTitle(event.target.value);
    if (event.target.name == 'content') return setContent(event.target.value);
  }

  const handleCancel = () => {
    props.history.push(`/articles/${state.id}`);
  }

  const article = {
    title: title,
    content: content
  };
  const settings = {
    handleSubmit: handleSubmit,
    handleChange: handleChange,
    handleCancel: handleCancel,
    actionLabel: 'Update'
  };

  return (
    <div>
      <h1>Edit {title}</h1>
      <Form article={article} settings={settings} />
    </div>
  );

}

export default ArticleEdit;