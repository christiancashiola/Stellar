import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Media from './media';

class MediaForm extends Component {

  constructor(props) {
    super(props);
    this.state = props.post;
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
    formData.append('post[tags]', this.state.tags);
    this.props.processForm(formData)
    .then(() => {
      this.props.history.push('/dashboard');
      this.props.closeModal();
    });
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
    const type = this.state.media_type || this.props.location.pathname
    let fileInput = <>
      <Media type={type} />
      <input onChange={this.handleFile} id="media-input" type="file"/>
    </>

    let preview = null;
    let bodyInput = null;
    let media = this.state.fileUrl || this.state.media;
    if (media) {
      fileInput = null;
      const mediaType = this.state.media_type || media.slice(5, 10);

      switch (mediaType) {
        case 'image':
          preview = (
          <img className="post-media" src={media} 
            alt="file preview"/>
          );
          break;
        case 'video':
          preview = (
            <video className="post-media" controls width="510px">
              <source src={media} type="video/mp4"/>
            </video> 
          );
          break;
        case 'audio':
          preview = <audio controls src={media}></audio>
    }
    
      const bodyPlaceholder = this.props.postErrors.length ?
        this.props.postErrors : "Reach for the stars...";
      bodyInput = <>
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
      </>;
    }

    return (
      <form className="media-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{this.props.username}</h3>
        <figure className="post-media-wrapper">
          {preview}
        </figure>
        {fileInput}
        {bodyInput}
        
        <div className="form-btns-wrapper">
          <Link onClick={this.props.closeModal}
            to="/dashboard" 
            className="sm-btn close-btn">
            <span id="close-btn-span">Close</span>
          </Link>
          <button className="sm-btn post-btn">Post</button>
        </div>
      </form>
    )
  }
}

export default withRouter(MediaForm);