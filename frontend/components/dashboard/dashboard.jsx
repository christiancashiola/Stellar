import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TextForm from '../posts/post_form/create_text_container';
import MediaForm from '../posts/post_form/media_form_container';
import DashLinks from './dash_links';
import PostIndex from '../posts/post_index_container';
import RecommendedRadar from './recommended_radar';
import { openModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
});

const Dashboard = ({ currentUser, openModal }) => {
  return (
    <section className="dashboard">
      <div className="current-user-dock">

        <img onClick={() => openModal('profile pic')} id="profile-pic"
          src={currentUser.profile_pic}
          alt="profile-pic"/>
          
        <Route exact path='/dashboard' component={DashLinks} />
        <Switch>
          <Route path='/dashboard/new/text' component={TextForm} />
          <Route path='/dashboard/new/quote' component={TextForm} />
          <Route path='/dashboard/new/link' component={TextForm} />
          <Route path='/dashboard/new' component={MediaForm} />
        </Switch>

        <PostIndex />
      </div>
      <RecommendedRadar />
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);