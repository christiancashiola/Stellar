import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const { logout } = this.props;
    return (
      <aside className="account-info-container">
        <h4 className="gray-header">ACCOUNT</h4>
        <div className="account-info-wrapper">
          <Link to="/likes">
            <span className="social">
              <i className="fas fa-heart"></i>Likes
            </span>
            <span className="count">17</span>
          </Link>

          <Link to="/likes">
            <span className="social">
              <i className="far fa-address-book"></i>Following
            </span>
            <span className="count">23</span>
          </Link>

          <button className="logout" onClick={logout}>
            <i className="fas fa-sign-out-alt"></i>Log out
          </button>
        </div>
      </aside>
    );
  }
};

export default AccountInfo;