import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateColorTheme } from '../../../actions/user_actions';

class AccountInfo extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick(e) {
    const node = document.querySelector('.account-info-container');
    return node && node.contains(e.target) ? null : this.props.unmount();
  }

  render() {
    const { logout, currentUserId, updateColorTheme } = this.props;
    return (
      <aside className="account-info-container">
        <h4 className="gray-header">ACCOUNT</h4>
        <div className="account-info-wrapper">
          <button 
            className="logout"
            onClick={() => updateColorTheme(currentUserId, true)}>
            Cosmic Theme
          </button>

          <button
            className="logout"
            onClick={() => updateColorTheme(currentUserId, false)}>
            Classic Theme
          </button>

          <button className="logout" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>Log out
          </button>
        </div>
      </aside>
    );
  }
};

export default AccountInfo;