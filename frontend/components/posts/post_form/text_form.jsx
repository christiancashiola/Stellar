import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextForm extends Component {

  constructor(props) {
    super(props);
    this.state = { body: '', title: '', tag: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({ post: this.state })
    .then(this.setState({ body: '', title: '', tag: '' }))
    .then(this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { currentUser } = this.props;
    // TODO: Dry up forms
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{currentUser.username}</h3>
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
          <Link to="/dashboard" className="sm-btn close-btn">
            <span id="close-btn-span">Close</span>
          </Link>
          <button className="sm-btn post-btn">Post</button>
        </div>
      </form>
    )
  }
}

export default TextForm;