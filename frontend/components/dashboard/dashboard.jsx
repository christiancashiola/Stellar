import React from 'react';
import { Route } from 'react-router-dom';
import CreateForm from './post_form/create_form_container';
import EditForm from './post_form/edit_form_container';
import DashPosts from '../posts/dash_posts/dash_posts_container';
import DashLinks from './dash_links';

const Dashboard = props => {

  return (
    <section className="dashboard">
      <div className="current-user-dock">
        <img className="pofile-pic" id="profile-pic"
          src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
          alt="profile-pic"/>
        <Route exact path='/dashboard' component={DashLinks} />
        {/* <DashPosts /> */}
        <Route path='/dashboard/new' component={CreateForm} />
        <Route path='/dashboard/edit' component={EditForm} />
      </div>
    </section>
  );
}

export default Dashboard;