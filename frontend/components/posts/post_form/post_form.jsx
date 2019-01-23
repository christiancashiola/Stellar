import React, { Component } from 'react';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = { body: '', title: '', tag: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(this.setState({ body: '', title: '', tag: '' }))
    .then(this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <input
          className="title-input"
          onChange={this.update('title')}
          value={this.state.title}
          id="body" 
          type="text"
          placeholder="Title"/>
          
        <label htmlFor="body"></label>
        <textarea 
          onChange={this.update('body')}
          value={this.state.body}
          id="body"
          placeholder="Reach for the stars...">
        </textarea>

        <label htmlFor="tag"></label>
        <input
          className="tag-input"
          onChange={this.update('tag')}
          value={this.state.tag}
          id="tag" 
          type="text"
          placeholder="#tags"/>

        <div className="form-btns-wrapper">
          <button className="sm-btn close-btn">Close</button>
          <button className="sm-btn post-btn">Post</button>
        </div>
      </form>
    )
  }
}

export default PostForm;