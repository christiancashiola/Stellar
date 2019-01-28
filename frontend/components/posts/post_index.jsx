import React, { Component } from 'react';
import DashPost from './dash_post';
import ExplorePost from './explore_post';
import Waypoint from 'react-waypoint';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      criterion: this.props.location.pathname.split('/')[1],
      page: 0,
    };
    this.getPosts = this.getPosts.bind(this);
  }

  // why doesn't this work without += ?
  getPosts() {
    this.props.fetchPosts(this.state.criterion, this.state.page);
    this.setState = ({ page: this.state.page += 1 });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const criterion = this.state.criterion;
    const { loading } = this.props;

    const posts = this.props.posts.map(post => {
      if (criterion === 'dashboard') {
        return <DashPost key={post.id} post={post} />
      } else {
        return <ExplorePost key={post.id} post={post} />
      }
    });
    
    return (
      <section className={`${criterion}-posts`}>
        {posts}
        {loading ? <div className="loader"></div> : null}
        <Waypoint bottomOffset="-30%" onEnter={this.getPosts} />
      </section>
    );
  }
}

export default PostsIndex;