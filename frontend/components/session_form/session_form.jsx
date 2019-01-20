import React, { Component } from 'react';

class SessionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push('/dashboard'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value});
  }

  // TODO: fix error display to refresh on locatoin change
  displayErrors() {
    let errors = this.props.sessionErrors.join('. ');
    if (errors.length) {
      if (errors[errors.length - 1] !== '.') {
        errors += '.';
      }
      
      return <div className="error-box">{errors}</div>
    }
  }
  
  render() {
    const { usernameField, formType } = this.props
    
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email"></label>
            <input
              onChange={this.update('email')}
              type="text" 
              placeholder="Email"
              id="email"/>
            <label htmlFor="password"></label>
              <input
              onChange={this.update('password')}
              type="password"
              placeholder="Password"
              id="password"/> 
            {usernameField ? usernameField(this.update) : null}
        </div>

        {this.displayErrors()}

        <button className="lg-blue-btn">{formType}</button>
      </form>
    );
  }
}

export default SessionForm;