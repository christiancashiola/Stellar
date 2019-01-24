import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MediaForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)

    // const formData = new FormData();
    // if media isnnt null
    // formData.append('post[media]', this.state.mediaFile );
    // add post util ajax
    // contentType: false,
    // processData: false,
    // change create action and strong params
  }

  handleFile(e) {
    this.setState({mediaFile: e.target.files[0]})
  }
  
  render() {
    const { currentUser } = this.props;
    return (
      <form className="media-form" onSubmit={this.handleSubmit}>
        <h3 className="current-username">{currentUser.username}</h3>
        <label id="media-label" htmlFor="media-input">
          <div className="media-icon-wrapper">
            <i className="fas fa-plus"></i>
            <i className="fas fa-camera-retro"></i>
          </div>
          Upload photos
          :)  
        </label>
        <input id="media-input" type="file"/>
        
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

export default connect(mapStateToProps)(MediaForm);