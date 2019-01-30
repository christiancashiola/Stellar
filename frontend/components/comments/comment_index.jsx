import React, { Component } from 'react';
import { readyComment, unreadyComment } from '../../util/ui_util';
import Comment from './comment';

let interval = null;

class CommentIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      comments: [],
      createdComment: '',
     };
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: add load spinner  
  componentDidMount() {
    this.props.fetchComments(this.props.post.id)
    .then(() => {
      let userIds = this.state.comments.map(comment => comment.authorId);
      userIds = userIds.filter(id => !this.props.currentUserIds.includes(id));
      this.props.fetchUsers(userIds);

      this.setState({ comments: this.props.comments });
    });

    this.setPlaceholder();
  }

  componentDidUpdate() {
    this.props.fetchComments(this.props.post.id)
    .then(() => {
      let userIds = this.state.comments.map(comment => comment.authorId);
      userIds = userIds.filter(id => !this.props.currentUserIds.includes(id));
      this.props.fetchUsers(userIds);

      this.setState({ comments: this.props.comments });
    });
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  setPlaceholder() {
    const placeholders = [
      "Speak from heart", "Don't be shy", "Let 'em hear it",
      "Say what you mean", "Mean what you say", "They'll love it"
    ];
    let i = 0;
    interval = setInterval(() => {
      i %= 5;
      document.querySelector('#comment-input')
        .setAttribute('placeholder', placeholders[i]);
      i += 1;
    }, 1750);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state.createdComment, this.props.post.id)
    .then(() => this.setState({ createdComment: '' }));
  }

  update(e) {
    this.setState({createdComment: e.target.value });
  }

  render() {
    const commentCount = Object.keys(this.state.comments).length;

    const comments = this.state.comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />
    });

    return (
      <div className="comments-container">
        <h3 className="comment-count">{commentCount} comments</h3>
        <ul className="comments-index">
          {
            comments.length ? 
            comments : 
            <p style={{ textAlign: 'center' }}>No comments yet.</p>
          }
        </ul>
        <form onSubmit={this.handleSubmit} className="comment-form">
          <textarea
            onChange={this.update.bind(this)}
            onFocus={readyComment} 
            onBlur={unreadyComment} 
            placeholder="Got something to say?"
            value={this.state.createdComment}
            id="comment-input">
          </textarea>
          <label htmlFor="comment-input"></label>
          <button className="comment-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentIndex;