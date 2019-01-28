import React, { Component } from 'react';
import Media from '../posts/post_form/media';
import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  uploadPhoto: (userId, data) => dispatch(updateUser(userId, data)),
});

class ProfilePic extends Component {

  constructor(props) {
    super(props);
    this.state = { profilePic: null, fileUrl: null }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[profile_pic]', this.state.profilePic);
    
    this.props.uploadPhoto(this.props.currentUserId, formData);
    this.props.closeModal();
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({profilePic: file, fileUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    let fileInput = <>
      <Media type="profile" />
      <input onChange={this.handleFile} id="media-input" type="file"/>
    </>

    let preview = null;
    if (this.state.profilePic) {
      fileInput = null;
      preview = (
        <img className="profile-media" src={this.state.fileUrl} 
          alt="file preview"/>
      );
    }

    return (
      <form className="media-form profile-upload" onSubmit={this.handleSubmit}>
        <figure className="post-media-wrapper">
          {preview}
        </figure>
        {fileInput}        
        <div className="form-btns-wrapper">
          <button onClick={this.props.closeModal}
            to="/dashboard" 
            className="sm-btn close-btn">
            <span id="close-btn-span">Close</span>
          </button>
          <button className="sm-btn post-btn">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);