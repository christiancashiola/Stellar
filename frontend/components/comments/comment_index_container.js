import { connect } from 'react-redux';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import CommentIndex from './comment_index';

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
  createComment: (comment, postId) => dispatch(createComment(comment, postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);