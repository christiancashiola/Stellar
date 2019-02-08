import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextForm extends Component {

  constructor(props) {
    super(props);
    this.state = { body: '', title: '', tags: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.path = this.props.location.pathname.split('/')[3];
    this.bodyPlaceholder = '';
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    if (this.path === 'link') {
        post.title = '!link!' + post.title;
    }
    this.props.processForm({ post })
    .then(() => {
      this.setState({ body: '', title: '', tags: '' });
      this.props.history.push('/dashboard');
    });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  componentDidMount() {
    document.querySelector('#title').focus();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.title !== this.state.title && this.path === 'link') {
      let newPlaceholder;
      newPlaceholder = this.state.title ? 'What about this link?': '';
      this.setState({ bodyPlaceholder: newPlaceholder });
    }
  }

  render() {
    let titlePlaceholder;
    let bodyPlaceholder;
    let specialStyle = '';

    switch (this.path) {
      case 'text':
        titlePlaceholder = 'Title';
        bodyPlaceholder = 'Reach for the stars...';
        break;
      case 'quote':
        titlePlaceholder = '"Quote"';
        specialStyle = 'quote-font';
        bodyPlaceholder = '- Source';
        break;
      case 'link':
        titlePlaceholder = "Paste in any link you'd like to share.";
        specialStyle = 'link-style';
    }
    bodyPlaceholder = this.state.bodyPlaceholder || bodyPlaceholder;
    bodyPlaceholder = this.props.postErrors.length ?
      this.props.postErrors : bodyPlaceholder;

    const { currentUser } = this.props;
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{currentUser.username}</h3>
        <label htmlFor="title"></label>
        <input
          className={`title-input ${specialStyle}`}
          onChange={this.update('title')}
          value={this.state.title}
          id="title" 
          type="text"
          placeholder={titlePlaceholder}/>
          
        <label htmlFor="body"></label>
        <textarea 
          onChange={this.update('body')}
          value={this.state.body}
          id="body"
          placeholder={bodyPlaceholder}>
        </textarea>

        <label htmlFor="tag"></label>
        <input
          className="tag-input"
          onChange={this.update('tags')}
          value={this.state.tags}
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