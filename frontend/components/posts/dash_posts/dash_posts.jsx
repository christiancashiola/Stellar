import React, { Component } from 'react';

class DashPosts extends Component {

  componentDidMount() {
    this.props.fetchPosts('dashboard');
  }

  render() {
    const posts = this.props.posts.map(post => {
      return <li key={post.id}>{post.body}</li>
    });
    
    return (
      <ul style={{ margin: '0px', padding: '100px'}}>
        {posts}
      </ul>
    );
  }
}

export default DashPosts;