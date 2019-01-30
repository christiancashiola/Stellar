import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import { readyComment, unreadyComment } from '../../util/ui_util';
import { fetchUsers } from '../../actions/user_actions';
import Comment from './comment';

const mapStateToProps = ({ entities }, ownProps) => {
  const comments = Object.values(entities.comments)
    .filter(comment => comment.postId === ownProps.post.id);

  return { 
    currentUserIds: Object.keys(entities.users),
    comments,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  fetchUsers: userIds => dispatch(fetchUsers(userIds)),
});

let interval = null;

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = { comments: [] };
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
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {


    const comments = this.state.comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />
    });

    return (
      <div className="comments-container">
        <h3 className="comment-count">10 comments</h3>
        <ul className="comments-index">
          {comments}
        </ul>
        <form className="comment-form">
          <textarea
            onFocus={readyComment} 
            onBlur={unreadyComment} 
            placeholder="Got something to say?"
            id="comment-input">
          </textarea>
          <label htmlFor="comment-input"></label>
          <button className="comment-btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);