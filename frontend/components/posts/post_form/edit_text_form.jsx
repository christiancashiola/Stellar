import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';
import { merge } from 'lodash';
import { closeModal } from '../../../actions/ui_actions';

class EditTextForm extends Component {

  constructor(props) {
    super(props);
    const { post } = props;
    this.state = { body: post.body, title: post.title, tag: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(merge({}, this.props.post, this.state))
      .then(this.setState({ body: '', title: '', tag: '' }));
    this.props.closeModal();  
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  componentDidMount() {
    document.querySelector('#body').focus();
  }
  
  render() {
    const { post } = this.props;
    return (
      <form className="post-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{post.username}</h3>
        <label htmlFor="title"></label>
        <input
          className={`title-input`}
          onChange={this.update('title')}
          value={this.state.title}
          id="title" 
          type="text"/>
          
        <label htmlFor="body"></label>
        <textarea
          onChange={this.update('body')}
          value={this.state.body}
          id="body">
        </textarea>

        <label htmlFor="tag"></label>
        <input
          className="tag-input"
          onChange={this.update('tag')}
          value={post.tag}
          id="tag" 
          type="text"/>

        <div className="form-btns-wrapper">
          <Link to="/dashboard" 
            onClick={this.props.closeModal}
            className="sm-btn close-btn">
            <span id="close-btn-span">Close</span>
          </Link>
          <button className="sm-btn post-btn">Edit</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(EditTextForm);