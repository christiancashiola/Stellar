import React, { Component } from 'react';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <section className="dashboard">
        <form style={ { paddingTop: '100px' }} onSubmit={this.handleSubmit}>
          <label htmlFor="body"></label>
          <input onChange={this.update('body')} id="body" type="text"/>
          <input type="submit" value="submit"/>
        </form>
      </section>
    )
  }
}

export default PostForm;