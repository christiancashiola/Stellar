import React from 'react';
import { Route } from 'react-router-dom';
import CreateForm from './post_form/create_form_container';
import EditForm from './post_form/edit_form_container';
import DashPosts from '../posts/dash_posts/dash_posts_container';
import DashLinks from './dash_links';

const Dashboard = props => {

  return (
    <section className="dashboard">

      <Route exact path='/dashboard' component={DashLinks} />
      {/* <DashPosts /> */}
      <Route path='/dashboard/new' component={CreateForm} />
      <Route path='/dashboard/edit' component={EditForm} />
    </section>
  );
}

export default Dashboard;