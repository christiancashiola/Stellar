import React, { Component } from 'react';
import Post from './post';

class DashPosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      criterion: this.props.location.pathname.split('/')[1],
    };
  }

  componentDidMount() {
    this.props.fetchPosts(this.state.criterion);
  }

  componentDidUpdate(prevProps, prevState) {
    debugger
  }

  render() {
    const { deletePost, updatePost } = this.props;

    const posts = this.props.posts.map(post => {
      return (
        <Post 
          key={post.id} 
          deletePost={deletePost}
          updatePost={updatePost}
          post={post} />
      );
    });
    
    return (
      <section className={`${this.state.criterion}-posts`}>
        {posts}
      </section>
        
    );
  }
}

export default DashPosts;