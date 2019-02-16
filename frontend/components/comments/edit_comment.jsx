import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/ui_actions';
import { updateComment } from '../../actions/comment_actions';
import { merge } from 'lodash';


class EditComment extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(merge({}, this.props.comment, this.state))
    .then(() => this.props.openModal('comment', this.props.post));
  }

  update(e) {
    this.setState({ body: e.target.value });
  }

  componentDidMount() {
    document.querySelector('#edit-comment').focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="edit-comment-form">
        <label htmlFor="edit-comment"></label>
        <textarea 
          value={this.state.body}
          onChange={this.update.bind(this)}
          placeholder="Unfortunately, we cannot read invisible text..."
          id="edit-comment">
        </textarea>
        <button className="edit-comment-btn">Edit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ entities: { posts }}, ownProps) => ({
  post: posts[ownProps.comment.postId],
}); 

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);