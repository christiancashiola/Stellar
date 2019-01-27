import React, { Component } from 'react';
import DashPost from './dash_post';

class PostsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      criterion: this.props.location.pathname.split('/')[1],
    };
  }

  componentDidMount() {
    this.props.fetchPosts(this.state.criterion);
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
      </section>
    );
  }
}

export default PostsIndex;