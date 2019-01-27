import React, { Component } from 'react';
import DashPost from './dash_post';
import ExplorePost from './explore_post';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      criterion: this.props.location.pathname.split('/')[1],
      page: 1,
    };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    this.props.fetchPosts(this.state.criterion, this.state.page);
    this.setState = ({ page: this.state.page += 1 });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const criterion = this.state.criterion;

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
        <button onClick={this.getPosts}>Get Posts</button>
      </section>
    );
  }
}

export default PostsIndex;