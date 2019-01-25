import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TextForm from '../posts/post_form/create_text_container';
import MediaForm from '../posts/post_form/media_form_container';
import DashLinks from './dash_links';
import PostIndex from '../posts/post_index_container';

const Dashboard = props => {

  return (
    <section className="dashboard">
      <div className="current-user-dock">
        <img className="pofile-pic" id="profile-pic"
          src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
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
    </section>
  );
}

export default Dashboard;