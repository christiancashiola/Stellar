import React, { Component } from 'react';
import DashPost from './dash_post_container';
import SearchExplorePost from './search_explore_post_container';
import Waypoint from 'react-waypoint';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts(page) {
    if (page === 0) {
      this.props.fetchPosts(this.props.location.pathname, page);
      this.setState = ({ page: 1 });
    } else {
      this.props.fetchPosts(this.props.location.pathname, this.state.page);
      this.setState = ({ page: this.state.page += 1 });
    }
  }

  componentDidMount() {
    this.props.clearPosts();
    this.getPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.clearPosts();
      this.getPosts(0);
    }
  }

  render() {
    const criterion = this.props.location.pathname.split('/')[1];
    const { loading } = this.props;

    const posts = this.props.posts.map(post => {
      if (criterion === 'dashboard') {
        return <DashPost key={post.id} post={post} getPosts={this.getPosts} />
      } else {
        return <SearchExplorePost key={post.id} post={post} />
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