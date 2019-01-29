import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/follow_actions';
import RecRadar from './recommended_radar';
import { fetchRecommendedUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  recommendedUsers: state.entities.recommendedUsers,
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  fetchRecommendedUsers: () => dispatch(fetchRecommendedUsers()),
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecRadar);