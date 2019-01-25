import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../../../actions/post_actions';

class MediaForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mediaFile: null,
      fileUrl: null,
      body: '',
      tag: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[media]', this.state.mediaFile);
    formData.append('post[body]', this.state.body);
    formData.append('post[tag]', this.state.tag);

    this.props.processForm(formData)
      .then(this.props.history.push('/'));
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({mediaFile: file, fileUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  
  render() {
    const { currentUser } = this.props;

    let fileInput = <>
      <label id="media-label" htmlFor="media-input">
        <div className="media-icon-wrapper">
          <i className="fas fa-plus"></i>
          <i className="fas fa-camera-retro"></i>
        </div>
        Upload photos
        :)  
      </label>
      <input onChange={this.handleFile} id="media-input" type="file"/>
    </>

    let preview = null;
    let bodyInput = null;
    if (this.state.fileUrl) {
      fileInput = null;

      preview = <img 
        className="img-preview" 
        src={this.state.fileUrl} 
        alt="file preview"/>

      bodyInput = <>
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
      </>;
    }

    return (
      <form className="media-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{currentUser.username}</h3>
        {preview}
        {fileInput}
        {bodyInput}
        
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

const mapStateToProps = ({ entities, session }) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];

  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(createPost(post)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MediaForm);