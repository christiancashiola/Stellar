import React, { Component } from 'react';

class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    const { formType, navLink } = this.props;
    let usernameInput = '';

    if (formType === 'signup') {
      usernameInput = (
        <>
          <label htmlFor="username">Username: </label>
          <input onChange={this.update('username')} type="text" id="username"/>
        </>
      )
    }
    
    return (
      <>
        <h3>{formType}</h3>
        <h4>{navLink}</h4>
        
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input onChange={this.update('email')} type="text" id="email"/>
          <label htmlFor="password">Password: </label>
          <input onChange={this.update('password')} type="password" id="password"/>
          {usernameInput}

          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default SessionForm;