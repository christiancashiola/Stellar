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

  componentWillUnmount() {
    this.props.clearErrors();
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

  // displayErrors() {
  //   let errors = this.props.sessionErrors.join('. ');
  //   if (errors.length) {
  //     errors += '.';
      
  //     console.log(errors);
  //     return <div className="error-box">{errors}</div>
  //   }
  // }
  
  render() {
    const { usernameField, formType, sessionErrors } = this.props;
    
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

        {sessionErrors.length ? <div className="error-box">{sessionErrors}</div> : null}

        <button className="lg-blue-btn">{formType}</button>
      </form>
    );
  }
}

export default SessionForm;